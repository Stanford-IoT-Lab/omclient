var proto = require('./longdan/ldproto');
var LongdanClient = require('./client/LongdanClient');
var OMFeed = require('./client/model/OMFeed');
var ObjTypes = require('./client/model/ObjTypes');

var omlib = {
	_proto: proto,
	_ldClient: null,

	// APIs
	auth: {},
	messaging: {},
	feeds: {},
	blobs: {},
}

/**
 * Configuration parameters:
 * sync (true|false) whether to fetch existing feeds and messages.
 * persist (true|false) whether synced messages should be written to disk.
 * history ("full"|"recent") whether to sync feed/group info beyond the message history window
 **/
omlib.init = function(config) {
	this._ldClient = new LongdanClient(config);
	this.events = this._ldClient.events;
	this._ldClient.store.getSettings(function(settings) {
		settings.getObjectByKey('sync', function(sync) {
			if (!sync) {
				var TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;
				var twoWeeksAgoMicros = (new Date().getTime() - TWO_WEEKS) * 1000;
				var defaultSync = {
					key: 'sync',
					caughtUp: false,
					feedSyncStart: config.history === "full" ? 0 : twoWeeksAgoMicros,
					feedSyncEnd: twoWeeksAgoMicros,
					feedSyncSplit: twoWeeksAgoMicros,
					defaultFeedSyncMask: OMFeed.MASK_STATE | OMFeed.MASK_DETAILS | OMFeed.MASK_LAST_READ | OMFeed.MASK_MEMBERS
				};
				settings.insert(defaultSync);
			}
			this._ldClient.enable();
		}.bind(this));
	}.bind(this));
}

omlib.auth.getAccount = function() {
	return omlib._ldClient.account;
}

omlib.auth.isAuthenticated = function() {
	return omlib._ldClient.account != null;
}

omlib.feeds.createFeed = function(kind, cb) {
	var feedKind = kind;
	var callback = cb;
	if (arguments.length == 1 && typeof arguments[0] == 'function') {
		callback = arguments[0];
		feedKind = null;
	}
	omlib._ldClient.feed._createFeed(feedKind, callback);
}

omlib.feeds.addAccountsToFeed = function(feed, accounts, cb) {
	omlib._ldClient.feed.addFeedMembers(feed, accounts, cb);
}

omlib.feeds.getOrCreateFeedWithAccounts = function(accounts, kind, cb) {
	var feedKind = kind;
	var callback = cb;
	if (arguments.length == 2 && typeof arguments[1] == 'function') {
		callback = arguments[1];
		feedKind = null;
	}
	omlib._ldClient.feed.getOrCreateFeedWithMembers(accounts, callback, feedKind);
}

omlib.messaging.types = ObjTypes;

module.exports = omlib;