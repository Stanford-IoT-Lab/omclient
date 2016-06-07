class OmStore {

	constructor(client) {
		this._client = client;
		this._tables = {};
	}

	clearData(cb) {
		this._tables = {};
		cb();
	}

	openTable(name, key, defaultObject, cb) {
		if (!this._tables[name]) {
			this._tables[name] = new OmTable(name, key, defaultObject);
		}
		cb(this._tables[name]);
	}
}

class OmTable {

	constructor(name, key) {
		var DEBUG = true;
		this._nextId = 1;
		this._name = name;
		this._key = key;
		this._data = {};
		this._keyLookup = {};

		this._id = "_id";
	}

	_defaultObject() {
		return {};
	}

	insert(o, cb) {
		var id = this._nextId++;
		o._id = id;
		this._data[id] = o;
		if (this._key) {
			this._keyLookup[o[this._key]] = id;
		}
		if (typeof(cb) == 'function')
			cb(false, o);
	}

	update(o, cb) {
		this._data[o._id] = o;
		if (typeof(cb) == 'function')
			cb(false, o);
	}

	getObjectById(id, cb) {
		var o = this._data[id];
		if (typeof(cb) == 'function')
			cb(o);
	}

	getObjectByKey(key, cb) {
		var id = this._keyLookup[key];
		this.getObjectById(id, cb);
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
}

module.exports = OmStore;