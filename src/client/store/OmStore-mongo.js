var codependency = require('codependency');
var requirePeer = codependency.get('omlib');

var MongoClient = requirePeer('mongodb').MongoClient;

var async = require('async');
var assert = require('assert');

function OmStore(client) {
	this._client = client;

	this._pendingOpens = {};
	this._tables = {};
}

OmStore.prototype.getObjectId = function(object) {
	return object._id;
}

// Generic method that cashes asynchronous table loads,
// may be reusable across storage engines.
OmStore.prototype.openTable = function(name, key, defaultObject, cb) {
	if (!this._tables[name]) {
		var table = new OmTable(this, name, key);
		table._defaultObject = defaultObject;
		this._tables[name] = table;
		var cbs = this._pendingOpens[name] = [];
		cbs.push(function() {
			cb(this._tables[name]);
		}.bind(this));
		table.load(function() {
			this._pendingOpens[name] = undefined;
			for (var i = 0; i < cbs.length; i++) {
				cbs[i](table);
			}
		}.bind(this))
	} else if (this._pendingOpens[name] != undefined) {
		this._pendingOpens[name].push(function() {
			cb(this._tables[name]);
		}.bind(this));
	} else {
		cb(this._tables[name]);
	}
}

OmStore.prototype.clearData = function(cb) {
	this.connect(function(db) {
		db.dropDatabase(function(err, result) {
			cb(err);
		});
	});
}

OmStore.prototype.connect = function(cb) {
	if (this._db != null) {
		cb(this._db);
	} else if (this._connectionQueue != null) {
		this._connectionQueue.push(cb);
	} else {
		this._connectionQueue = new Array();
		this._connectionQueue.push(cb);

		var dbUrl = this._client._config.mongo_url;
		if (!dbUrl) dbUrl = "mongodb://localhost:27017/omlibjs_" + this._client._config.instance;

		MongoClient.connect(dbUrl, function(err, db) {
		  assert.equal(null, err);
		  this._db = db;
		  this._connectionQueue.forEach(function(cb) {
		  	cb(db);
		  });
		  this._connectionQueue = undefined;
		}.bind(this));
	}
}

function OmTable(engine, name, key) {
	this._engine = engine;
	this._client = this._engine._client;
	this._name = name;
	this._key = key;
}

OmTable.prototype._id = "_id";
OmTable.prototype._modifiedTimestamp = "_m";
OmTable.prototype._pendingWritesById = {};
OmTable.prototype._pendingWritesByKey = {};
OmTable.prototype._pendingWritesCounts = {};

OmTable.prototype.addPendingUpdate = function(o) {
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

OmTable.prototype.removePendingUpdate = function(o) {
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

OmTable.prototype.addPendingInsert = function(o) {
	var key = o[this._key];

	this._pendingWritesByKey[key] = o;
	if (this._pendingWritesCounts[key]) {
		this._pendingWritesCounts[key]++;
	} else {
		this._pendingWritesCounts[key] = 1;
	}
}

OmTable.prototype.removePendingInsert = function(o) {
	var key = o[this._key];

	if (this._pendingWritesCounts[key] == 1) {
		delete this._pendingWritesCounts[key];
		delete this._pendingWritesByKey[key];
	} else {
		this._pendingWritesCounts[key]--;
	}
}

OmTable.prototype.load = function(cb) {
	this._engine.connect(function(db) {
		db.collection(this._name, {}, function(err, collection) {
			this.collection = collection;
			cb();
		}.bind(this));
	}.bind(this));
}

OmTable.prototype.insert = function(o, cb) {
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
	this.collection.insertOne(b, {}, function(err, res) {
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
	}.bind(this));
}

OmTable.prototype._defaultObject = function() {
	return {};
}

OmTable.prototype.update = function(o, cb) {
	if (typeof(o.toRaw) == 'function')
		o = o.toRaw();

	if (this._modifiedTimestamp) {
		o[this._modifiedTimestamp] = new Date().getTime();
	}

	this.addPendingUpdate(o);

	var sel = { _id: o._id };
	var opt = {};
	this.collection.update(sel, o, opt, function(err, doc) {
		this.removePendingUpdate(o);

		if (typeof(cb) == 'function') {
			cb(o);
		}
		this._client.events._notify(this._name);
	}.bind(this));
}

OmTable.prototype.getObjectById = function(id, cb) {
	var o = this._pendingWritesById[id];
	if (o) {
		cb(o);
		return;
	}

	this.collection.findOne({ _id: id }, {}, function(err, res) {
		cb(res);
	}.bind(this));
}

OmTable.prototype.getObjectByKey = function(key, cb) {
	var o = this._pendingWritesByKey[key];
	if (o) {
		cb(o);
		return;
	}

	var query = {};
	query[this._key] = key;
	this.collection.findOne(query, {}, function(err, res) {
		cb(res);
	}.bind(this));
}

OmTable.prototype.getOrCreateObject = function(key, cb, details) {
	this.getObjectByKey(key, function(existing) {
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
			this.insert(obj, function(res) {
				if (typeof(cb) == 'function') {
					cb(res);
				}
			});
		}
	}.bind(this));
}

OmTable.prototype.query = function(query, cb) {
	var res = this.collection.find(query);
	return new MongoQueryResult(res);
}

function MongoQueryResult(cursor) {
	this.cursor = cursor;
}

MongoQueryResult.prototype.forEach = function(cb) {
	this.cursor.forEach(function(item) {
		cb(item);
	});
}

MongoQueryResult.prototype.toArray = function(cb) {
	this.cursor.toArray(function(err, docs) {
		cb(docs);
	});
}

module.exports = OmStore;