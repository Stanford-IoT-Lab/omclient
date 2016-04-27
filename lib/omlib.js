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
 * persist (true|false) whether synced messages should be written to disk.
 * history ("full"|"recent"|"none") whether to sync feed/group info beyond the message history window
 * mongo_url (string) if specified, use the mongo db adapter connecting to this database.
 **/
Omlib.init = function(config) {
	init(Omlib, config);
}

function setDefaults(config) {
	if (!config.instance) config.instance = 'default';
	if (!config.storagePath) config.storagePath = 'omlib.db';
	if (config.history === undefined) config.history = "recent";
	if (config.history === false) config.history = "none";
}

function init(instance, config) {
	if (instance._omInit) throw "Omlib already initialized";

	if (!config) config = {};
	setDefaults(config);

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
	instance.store = instance._ldClient.store;

	instance.connect = function() {
		instance._ldClient.enable();
	}

	var startSync = function() {
		if (config.sync) {
			instance.connect();
		}
	}

	instance.store.getSettings(function(settings) {
		settings.getObjectByKey('sync', function(sync) {
			if (!sync) {
				var now = new Date().getTime();
				var TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;
				var twoWeeksAgoMicros = (now - TWO_WEEKS) * 1000;
				var nowMicros = now * 1000;

				var syncBegin, syncEnd, syncSplit;
				switch (config.history) {
					case "full":
						syncBegin = 0;
						syncEnd = twoWeeksAgoMicros;
						syncSplit = twoWeeksAgoMicros;
						break;
					case "none":
						syncBegin = nowMicros;
						syncEnd = nowMicros;
						syncSplit = nowMicros;
						break;
					case "recent":
					default:
						syncBegin = twoWeeksAgoMicros;
						syncEnd = twoWeeksAgoMicros;
						syncSplit = twoWeeksAgoMicros;
						break;
				}
				
				var defaultSync = {
					key: 'sync',
					caughtUp: false,
					feedSyncStart: syncBegin,
					feedSyncEnd: syncEnd,
					feedSyncSplit: synSplit,
					defaultFeedSyncMask: OMFeed.MASK_STATE | OMFeed.MASK_DETAILS | OMFeed.MASK_LAST_READ | OMFeed.MASK_MEMBERS
				};
				settings.insert(defaultSync, startSync);
			} else {
				startSync();
			}
		}.bind(instance));
	}.bind(instance));
}

module.exports = Omlib;