var Datastore = require("nedb");

class OmStore {

	constructor(client) {
		this._client = client;

		this.feeds = new OmTable("feeds", "identifier");

		this._data = {};
		this._data._sync = {
			caughtUp: false,
			feedSyncStart: 0,
			feedSyncEnd: 0,
			feedSyncSplit: 0,
		};
	}
}

class OmTable {

	constructor(name, key) {
		var DEBUG = true;
		this._name = name;
		this._key = key;
		this._data = new Datastore({
			filename: "db/" + name + ".db",
			inMemoryOnly: DEBUG
		});
		if (key) {
			this._data.ensureIndex({
				fieldName: key
			});
		}
		this._data.loadDatabase();
	}

	insert(o, cb) {
		this._data.insert(o, cb);
	}

	update(o, cb) {
		this._data.update({
			_id: o._id
		}, o, {}, cb);
	}

	getObjectById(id, cb) {
		return this._data.findOne({
			_id: id
		}, cb);
	}

	getObjectByKey(key, cb) {
		var query = {};
		query[this._key] = key;
		this._data.findOne(query, cb)
	}
}

module.exports = OmStore;