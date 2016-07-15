if (typeof window === 'undefined') {
	var codependency = require('codependency');
	var requirePeer = codependency.register(module);
}
if (typeof Promise === 'undefined') require('es6-promise').polyfill();

var LongdanClient = require('./client/LongdanClient');
var OmlibAuthApi = require('./api/auth');
var OmlibMessagingApi = require('./api/messaging');
var OmlibFeedsApi = require('./api/feeds');
var OmlibBlobsApi = require('./api/blobs');
var OmlibIdentityApi = require('./api/identity');

function Omlib(config) {
	init(this, config);
}

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
	if (config.sync) {
		instance.connect();
	}
}

module.exports = Omlib;
