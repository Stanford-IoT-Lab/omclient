var proto = require('./longdan/ldproto');
var OMFeed = require('./client/model/OMFeed');
var LongdanClient = require('./client/LongdanClient');
var OmlibAuthApi = require('./api/auth');
var OmlibMessagingApi = require('./api/messaging');
var OmlibFeedsApi = require('./api/feeds');
var OmlibBlobsApi = require('./api/blobs');
var OmlibIdentityApi = require('./api/identity');

var omlib = {
	_proto: proto,
	_ldClient: null,

	// APIs
	auth: {},
	messaging: {},
	feeds: {},
	blobs: {},
	identity: {},
}

/**
 * Configuration parameters:
 * sync (true|false) whether to fetch existing feeds and messages.
 * persist (true|false) whether synced messages should be written to disk.
 * history ("full"|"recent") whether to sync feed/group info beyond the message history window
 **/
omlib.init = function(config) {
	if (!config) config = {};
	var client = new LongdanClient(config);
	this._ldClient = client;
	this.auth = new OmlibAuthApi(client);
	this.messaging = new OmlibMessagingApi(client);
	this.feeds = new OmlibFeedsApi(client);
	this.blobs = new OmlibBlobsApi(client);
	this.identity = new OmlibIdentityApi(client);
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

module.exports = omlib;