var codependency = require('codependency');
var requirePeer = codependency.get('omlib');

var MongoClient = requirePeer('mongodb').MongoClient;

var async = require('async');
var assert = require('assert');

class OmStore {

	constructor(client) {
		this._client = client;

		this._pendingOpens = {};
		this._tables = {};
	}

	getObjectId(object) {
		return object._id;
	}

	// Generic method that cashes asynchronous table loads,
	// may be reusable across storage engines.
	openTable(name, key, defaultObject, cb) {
		if (!this._tables[name]) {
			var table = new OmTable(this, name, key);
			table._defaultObject = defaultObject;
			this._tables[name] = table;
			var cbs = this._pendingOpens[name] = [];
			cbs.push(() => {
				cb(this._tables[name]);
			});
			table.load(() => {
				this._pendingOpens[name] = undefined;
				for (var i = 0; i < cbs.length; i++) {
					cbs[i](table);
				}
			})
		} else if (this._pendingOpens[name] != undefined) {
			this._pendingOpens[name].push(() => {
				cb(this._tables[name]);
			});
		} else {
			cb(this._tables[name]);
		}
	}

	clearData(cb) {
		this.connect((db) => {
			db.dropDatabase((err, result) => {
				cb(err);
			});
		});
	}

	connect(cb) {
		if (this._db != null) {
			cb(this._db);
		} else if (this._connectionQueue != null) {
			this._connectionQueue.push(cb);
		} else {
			this._connectionQueue = new Array();
			this._connectionQueue.push(cb);

			var dbUrl = this._client._config.mongo_url;
			if (!dbUrl) dbUrl = "mongodb://localhost:27017/omlibjs_" + this._client._config.instance;

			MongoClient.connect(dbUrl, (err, db) => {
			  assert.equal(null, err);
			  this._db = db;
			  this._connectionQueue.forEach((cb) => {
			  	cb(db);
			  });
			  this._connectionQueue = undefined;
			});
		}
	}
}

class OmTable {

	constructor(engine, name, key) {
		this._id = "_id";
		this._modifiedTimestamp = "_m";

		this._engine = engine;
		this._client = this._engine._client;
		this._name = name;
		this._key = key;

		this._pendingWritesById = {};
		this._pendingWritesByKey = {};
		this._pendingWritesCounts = {};
	}

	addPendingUpdate(o) {
		var key = o[this._key];
		var id = o._id;

		this._pendingWritesById[id] = o;
		this._pendingWritesByKey[key] = o;
		if (this._pendingWritesCounts[key]) {
			this._pendingWritesCounts[id]++;
		} else {
			this._pendingWritesCounts[key] = 1;
		}
	}

	removePendingUpdate(o) {
		var id = o._id;
		var key = o[this._key];

		if (this._pendingWritesCounts[key] == 1) {
			delete this._pendingWritesCounts[key];
			delete this._pendingWritesById[id];
			delete this._pendingWritesByKey[key];
		} else {
			this._pendingWritesCounts[key]--;
		}
	}

	addPendingInsert(o) {
		var key = o[this._key];

		this._pendingWritesByKey[key] = o;
		if (this._pendingWritesCounts[key]) {
			this._pendingWritesCounts[key]++;
		} else {
			this._pendingWritesCounts[key] = 1;
		}
	}

	removePendingInsert(o) {
		var key = o[this._key];

		if (this._pendingWritesCounts[key] == 1) {
			delete this._pendingWritesCounts[key];
			delete this._pendingWritesByKey[key];
		} else {
			this._pendingWritesCounts[key]--;
		}
	}

	load(cb) {
		this._engine.connect((db) => {
			db.collection(this._name, {}, (err, collection) => {
				this.collection = collection;
				cb();
			});
		});
	}

	insert(o, cb) {
		if (typeof(o.toRaw) == 'function')
			o = o.toRaw();

		var b = this._defaultObject();
		for (var k in o) {
			b[k] = o[k];
		}

		if (this._modifiedTimestamp) {
			b[this._modifiedTimestamp] = new Date().getTime();
		}

		this.addPendingInsert(b);
		this.collection.insertOne(b, {}, (err, res) => {
			if (err) {
				console.log("Insertion failed! " + this._name + ": " + new Error().stack);
				console.log(b);
				throw err;
			}
			
			this.removePendingInsert(b);
			this._client.events._notify(this._name);
			if (typeof(cb) == 'function') {
				cb(res.ops[0]);
			}
		});
	}

	_defaultObject() {
		return {};
	}

	update(o, cb) {
		if (typeof(o.toRaw) == 'function')
			o = o.toRaw();

		if (this._modifiedTimestamp) {
			o[this._modifiedTimestamp] = new Date().getTime();
		}

		this.addPendingUpdate(o);

		var sel = { _id: o._id };
		var opt = {};
		this.collection.update(sel, o, opt, (err, doc) => {
			this.removePendingUpdate(o);

			if (typeof(cb) == 'function') {
				cb(o);
			}
			this._client.events._notify(this._name);
		});
	}

	getObjectById(id, cb) {
		var o = this._pendingWritesById[id];
		if (o) {
			cb(o);
			return;
		}

		this.collection.findOne({ _id: id }, {}, (err, res) => {
			cb(res);
		});
	}

	getObjectByKey(key, cb) {
		var o = this._pendingWritesByKey[key];
		if (o) {
			cb(o);
			return;
		}

		var query = {};
		query[this._key] = key;
		this.collection.findOne(query, {}, (err, res) => {
			cb(res);
		});
	}

	getOrCreateObject(key, cb, details) {
		this.getObjectByKey(key, (existing) => {
			if (existing != null) {
				if (typeof(cb) == 'function') {
					cb(existing, true);
				}
			} else {
				var obj = this._defaultObject();
				if (typeof(details) != 'undefined') {
					for (var p in details) {
						obj[p] = details[p];
					}
				}
				obj[this._key] = key;
				this.insert(obj, (res) => {
					if (typeof(cb) == 'function') {
						cb(res);
					}
				});
			}
		});
	}

	query(query, cb) {
		var res = this.collection.find(query);
		return new MongoQueryResult(res);
	}
}

class MongoQueryResult {

	constructor(cursor) {
		this.cursor = cursor;
	}

	forEach(cb) {
		this.cursor.forEach((item) => {
			cb(item);
		});
	}

	toArray(cb) {
		this.cursor.toArray((err, docs) => {
			cb(docs);
		});
	}
}

module.exports = OmStore;