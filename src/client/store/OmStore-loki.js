var loki = require("lokijs");
var lokiIndexed = require("./loki-indexed-adapter");
var async = require('async');
var OmQueryResult = require('./OmQueryResultArray');

/**
 * Loki stores all collections in a single database file.
 * To avoid full db writes during updates, we put each collection in its own database.
 */
class OmStore {

	constructor(client) {
		this._client = client;

		this._pendingOpens = {};
		this._tables = {};
	}

	getObjectId(object) {
		return object['$loki'];
	}

	clearData(cb) {
		if (typeof window === 'undefined') {
			this._deleteFolderRecursive(this._client._config.storagePath);
			cb();
		} else {
			// todo
			cb();
		}
	}

	_deleteFolderRecursive(path) {
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
}

class OmTable {

	constructor(engine, name, key) {
		this._id = "$loki";
		this._modifiedTimestamp = "_m";

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
			} else if (this._supportsIndexedDB()) {
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

	_supportsIndexedDB() {
		if (typeof window.indexedDB === 'undefined') return false;
		try {
			var db = window.indexedDB.open('test');
			return db != null;
		} catch (e) {
			return false;
		}
	}

	load(cb) {
		if (this._persist) {
			this._db.loadDatabase(this._name, () => {
				console.log("loaded " + this._name);
				this._data = this._db.getCollection("data")
				if (!this._data) {
					console.log("creating " + this._name);
					this._data = this._db.addCollection("data")
				}
				this._client.events._notify(this._client.events.DB_LOADED);
				cb();
			});
		} else {
			this._data = this._db.addCollection("data")
			cb();
		}
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

		var r = this._data.insert(b);
		if (typeof(cb) == 'function') {
			async.nextTick(() => {
				cb(r);
			}, 0);
		}
		this._client.events._notify(this._name);
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

		this._data.update(o);
		if (typeof(cb) == 'function') {
			async.nextTick(() => {
				cb(o);
			});
		}
		this._client.events._notify(this._name);
	}

	getObjectById(id, cb) {
		var o = this._data.findOne({
			$loki: id
		});
		async.nextTick(() => {
			cb(o);
		});
	}

	getObjectByKey(key, cb) {
		var query = {};
		query[this._key] = key;
		var r = this._data.findOne(query);
		async.nextTick(() => {
			cb(r);
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
						//async.nextTick(function() {
						cb(res);
						//});
					}
				});
			}
		});
	}

	query(query, cb) {
		var res = this._data.find(query);
		return new OmQueryResult(res);
	}
}

module.exports = OmStore;