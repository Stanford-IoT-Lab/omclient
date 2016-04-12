var proto = require('./longdan/ldproto');
var OMFeed = require('./client/model/OMFeed');
var LongdanClient = require('./client/LongdanClient');
var OmlibAuthApi = require('./api/auth');
var OmlibMessagingApi = require('./api/messaging');
var OmlibFeedsApi = require('./api/feeds');
var OmlibBlobsApi = require('./api/blobs');
var OmlibIdentityApi = require('./api/identity');

function Omlib(config) {
	init(this, config);
}

Omlib._proto = proto;
Omlib.prototype._omInit = false;
Omlib.prototype._ldClient = null;

/**
 * Configuration parameters:
 * sync (true|false) whether to fetch existing feeds and messages.
 * persist (true|false) whether synced messages should be written to disk.
 * history ("full"|"recent") whether to sync feed/group info beyond the message history window
 **/
Omlib.init = function(config) {
	init(Omlib, config);
}

function init(instance, config) {
	if (instance._omInit) throw "Omlib already initialized";

	if (!config) config = {};
	if (!config.storagePath) config.storagePath = 'omlib.db';
	
	var client = new LongdanClient(config);
	instance._omInit = true;
	instance._proto = proto;
	instance._ldClient = client;
	instance.auth = new OmlibAuthApi(client);
	instance.messaging = new OmlibMessagingApi(client);
	instance.feeds = new OmlibFeedsApi(client);
	instance.blobs = new OmlibBlobsApi(client);
	instance.identity = new OmlibIdentityApi(client);
	instance.events = instance._ldClient.events;

	instance._ldClient.store.getSettings(function(settings) {
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
			instance._ldClient.enable();
		}.bind(instance));
	}.bind(instance));
}

module.exports = Omlib;