var proto = require('./ldproto');
var LdClient = require('./client/LongdanClient');
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

omlib.init = function(config) {
	this._ldClient = new LdClient(config);
	this._ldClient.store.getSettings(function(settings){
		settings.getObjectByKey('sync', function(sync){
			if(!sync) {
				var TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;
				var twoWeeksAgo = new Date().getTime() - TWO_WEEKS;
				var defaultSync = {
				  key: 'sync',
				  caughtUp: false,
				  feedSyncStart: 0,
				  feedSyncEnd: twoWeeksAgo * 1000,
				  feedSyncSplit: twoWeeksAgo * 1000,
				  defaultFeedSyncMask: OMFeed.MASK_STATE | OMFeed.MASK_DETAILS | OMFeed.MASK_LAST_READ | OMFeed.MASK_MEMBERS
				};
				settings.insert(defaultSync);
			}
		}.bind(this));
	}.bind(this));

	this._ldClient.enable();
	this.events = this._ldClient.events;
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