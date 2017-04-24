/**
 * OmStoreEngine --
      getObjectId(object)
        returns the id of a given object.

      openTable(tableName, idField, defaultObjectFactory, callback)
		returns a OmStoreTable of the given name with idField as a unique key.
		defaultObjectFactory - a function to create a new object ot insert when needed
		callback - issue this callback when the table is available, passing
		the opened OmStoreTable as the first argument.

 * OmStoreTable
	 insert(obj, cb)
     update(obj, cb)
     getObjectById(id, cb)
     getObjectByKey(key, cb)
     getOrCreateObject(key, cb)
        returns object having key `key`. If none exists,
        creates one using the table's defaultObjectFactory.
     query(query)
       query syntax is a small subset of MongoDB.
		returns an OmQueryResult

 * OmQueryResult
	forEach(cb)
		cb gets each result as an argument
	getCount()
	toArray(cb)
		reads all results to an array and sends to the callback
 */

var OMFeed = require('../model/OMFeed');

class OmStore {

	constructor(client) {
		var OmStoreEngine;
		if (client._config.mongo_url) {
			OmStoreEngine = require("./OmStore-mongo");
		} else {
			OmStoreEngine = require("./OmStore-loki");
		}
		this._storeImpl = new OmStoreEngine(client);
	}

	getObjectId(object) {
		return this._storeImpl.getObjectId(object);
	}

	clearData(cb) {
		this._storeImpl.clearData(cb);
	}

	getFeeds(cb) {
		var defaultObject = function() {
			var TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;
			var twoWeeksAgo = (new Date().getTime() - TWO_WEEKS) * 1000;
			return {
				name: "",
				thumbnailHash: null,
				kind: undefined,
				members: [],
				invitations: [],
				specifiedName: null,
				specifiedThumbnailHash: null,
				renderableTime: 0,
				lastReadTime: 0,
				messageCount: 0,
				numUnread: 0,
				_syncMask: OMFeed.MASK_DEFAULT,
				newestFromService: twoWeeksAgo - 1
			}
		};
		return this._storeImpl.openTable("feeds", "identifier", defaultObject, cb);
	}

	getAccounts(cb) {
		var defaultObject = function() {
			return {
				name: "",
				thumbnailHash: null,
				feeds: [],
				hasAppTime: null,
				profileVersion: 0,
				owned: false,
				upToDate: false
			};
		};
		return this._storeImpl.openTable("accounts", "account", defaultObject, cb);
	}

	getIdentityHashes(cb) {
		var defaultObject = function() {
			return {
				accountId: null,
				identityHash: null,

			};
		};
		return this._storeImpl.openTable("identity-hashes", "identityHash", defaultObject, cb);
	}

	getBlobs(cb) {
		var defaultObject = function() {
			return {
				sources: []
			};
		};
		return this._storeImpl.openTable("blobs", "hash", defaultObject, cb);
	}

	getSettings(cb) {
		var defaultObject = function() {
			return {};
		};
		return this._storeImpl.openTable("settings", "key", defaultObject, cb);
	}

	getMessageReceipts(cb) {
		var defaultObject = function() {
			return {};
		};
		return this._storeImpl.openTable("messages", "key", defaultObject, cb);
	}

	getFeedObjects(feedId, cb) {
		var defaultObject = function() {
			return {
				likes: {},
				likeCount: 0,
				selfLikeCount: 0,
				aggregateLikes: {},
				aggregateLikeCount: 0,
				aggregateSelfLikeCount: 0
			};
		};
		return this._storeImpl.openTable("feed-object-" + feedId, "msgId", defaultObject, cb);
	}

	getStickers(cb) {
		var defaultObject = function() {
			return {
				itemId: undefined,
				thumbnailHash: undefined,
				info: undefined,
				json: undefined,
				chattable: false,
				placeable: false
			};
		};
		return this._storeImpl.openTable("sticker", "itemId", defaultObject, cb);
	}
}

module.exports = OmStore;
