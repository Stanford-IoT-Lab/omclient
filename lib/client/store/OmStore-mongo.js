var MongoClient = require('mongodb').MongoClient;
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

OmStore.prototype.connect = function(cb) {
	if (this._db != null) {
		cb(this._db);
	} else if (this._connectionQueue != null) {
		this._connectionQueue.push(cb);
	} else {
		this._connectionQueue = new Array();
		this._connectionQueue.push(cb);

		var dbUrl = this._client._config.mongo_url;
		if (!dbUrl) dbUrl = "mongodb://localhost:27017/omlibjs";

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

	this.collection.insertOne(b, {}, function(err, res) {
		if (err) {
			console.log("Insertion failed! " + this._name + ": " + new Error().stack);
			console.log(b);
			throw err;
		}
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

	var sel = { _id: o._id };
	var opt = {};
	this.collection.update(sel, o, opt, function(err, doc) {
		if (typeof(cb) == 'function') {
			cb(o);
		}
		this._client.events._notify(this._name);
	}.bind(this));
}

OmTable.prototype.getObjectById = function(id, cb) {
	this.collection.findOne({ _id: id }, {}, function(err, res) {
		cb(res);
	});
}

OmTable.prototype.getObjectByKey = function(key, cb) {
	var query = {};
	query[this._key] = key;
	this.collection.findOne(query, {}, function(err, res) {
		cb(res);
	});
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