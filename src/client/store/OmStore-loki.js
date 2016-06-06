var loki = require("lokijs");
var lokiIndexed = require("./loki-indexed-adapter");
var async = require('async');
var OmQueryResult = require('./OmQueryResultArray');

/**
 * Loki stores all collections in a single database file.
 * To avoid full db writes during updates, we put each collection in its own database.
 */
function OmStore(client) {
	this._client = client;

	this._pendingOpens = {};
	this._tables = {};
}

OmStore.prototype.getObjectId = function(object) {
	return object['$loki'];
}

OmStore.prototype.clearData = function(cb) {
	if (typeof window === 'undefined') {
		this.deleteFolderRecursive(this._client._config.storagePath);
		cb();
	} else {
		// todo
		cb();
	}
}

OmStore.prototype.deleteFolderRecursive = function(path) {
	var fs = require('fs');
 	if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file,index) {
    	var curPath = path + "/" + file;
    	if(fs.lstatSync(curPath).isDirectory()) { // recurse
    		deleteFolderRecursive(curPath);
    	} else { // delete file
        	fs.unlinkSync(curPath);
    	}
    });
    fs.rmdirSync(path);
  }
};

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

function OmTable(engine, name, key) {
	this._client = engine._client;
	this._name = name;
	this._key = key;
	var persist = this._client._config.persist !== false;
	var instance = this._client._config.instance;

	var path = name;
	var lokiSettings = {};
	if (persist) {
		if (typeof window === 'undefined') {
			lokiSettings.persistenceMethod = "fs";
			path = this._client._config.storagePath + "/" + instance + "_" + name;			
		} else if (supportsIndexedDB()) {
			lokiSettings.adapter = new lokiIndexed("omlibjs_" + instance);
		} else {
			persist = false;
		}
	}

	this._persist = persist;
	if (this._persist) {
		lokiSettings.autosave = true;
		lokiSettings.autosaveInterval = 10000;
	} else {
		lokiSettings.autosave = false;		
	}
	this._db = new loki(path, lokiSettings);
}

function supportsIndexedDB() {
	if (typeof window.indexedDB === 'undefined') return false;
	try {
		var db = window.indexedDB.open('test');
		return db != null;
	} catch (e) {
		return false;
	}
}

OmTable.prototype._id = "$loki";
OmTable.prototype._modifiedTimestamp = "_m";

OmTable.prototype.load = function(cb) {
	if (this._persist) {
		this._db.loadDatabase(this._name, (function() {
			console.log("loaded " + this._name);
			this._data = this._db.getCollection("data")
			if (!this._data) {
				console.log("creating " + this._name);
				this._data = this._db.addCollection("data")
			}
			this._client.events._notify(this._client.events.DB_LOADED);
			cb();
		}).bind(this));
	} else {
		this._data = this._db.addCollection("data")
		cb();
	}
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

	var r = this._data.insert(b);
	if (typeof(cb) == 'function') {
		async.nextTick(function() {
			cb(r);
		}, 0);
	}
	this._client.events._notify(this._name);
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

	this._data.update(o);
	if (typeof(cb) == 'function') {
		async.nextTick(function() {
			cb(o);
		});
	}
	this._client.events._notify(this._name);
}

OmTable.prototype.getObjectById = function(id, cb) {
	var o = this._data.findOne({
		$loki: id
	});
	async.nextTick(function() {
		cb(o);
	});
}

OmTable.prototype.getObjectByKey = function(key, cb) {
	var query = {};
	query[this._key] = key;
	var r = this._data.findOne(query);
	async.nextTick(function() {
		cb(r);
	})
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
					//async.nextTick(function() {
					cb(res);
					//});
				}
			});
		}
	}.bind(this));
}

OmTable.prototype.query = function(query, cb) {
	var res = this._data.find(query);
	return new OmQueryResult(res);
}

module.exports = OmStore;