// -*- tab-width: 4 -*-

var proto = require("../longdan/ldproto");
var connection = require('../longdan/connection');
var ourcrypto = require('../util/crypto');

var LongdanMessageProcessor = require('./LongdanMessageProcessor');
var LongdanMessageConsumer = require('./LongdanMessageConsumer');
var LongdanDurableJobProcessor = require('./LongdanDurableJobProcessor');

// Exposed APIs
var AuthUtils = require('./ClientAuthUtils');
var BlobUtils = require('./ClientBlobUtils');
var FeedUtils = require('./ClientFeedUtils');
var IdentityUtils = require('./ClientIdentityUtils');
var MessagingUtils = require('./ClientMessagingUtils');

var OmStore = require('./store/OmStore');
var OmEvent = require('./OmEvent');


var crypto = require('crypto');
var http = require('http');
var https = require('https');
var url = require('url');

var TEST_KEYS = new proto.LDPublicKeys({
	"ClusterEndpoints": {
		"ONE": ["https://us.omlet.me"],
		"TWO": ["https://sg.omlet.me"],
		"THREE": ["https://cn.omlet.me"],
		"FOUR": ["https://de.omlet.me"]
	},
	"ClusterKeys": {
		"ONE": "xkkzyNJmZ1DmNPxGwrykZ2O91f10KNXQvspa15nKKGs=",
		"TWO": "XaG4I7b7wDOZ+lGHSPwbJ2HLkIFf0UGYAWz9c9LkiQk=",
		"THREE": "hj/8xrbYZvZkeOjoN9ndTj+2HAICPXDfK3D/Tfl2nDY=",
		"FOUR": "xMRCvh1eki9JEceBcV7Bx49uaQYpX8FdD0eZ+LCGqCc="
	},
	"DefaultCluster": "ONE",
	"IdpEndpoints": ["https://idp.omlet.me"],
	"IdpKey": "MIOC9PS8KIwXOXSHtplBZLSpIqcifns0jzExtkHXw1g="
});

var LOCAL_TEST_KEYS = new proto.LDPublicKeys({
	"ClusterEndpoints": {
		"ONE": ["http://127.0.0.1:3829"]
	},
	"ClusterKeys": {
		"ONE": "80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA="
	},
	"DefaultCluster": "ONE",
	"IdpEndpoints": ["http://127.0.0.1:4001"],
	"IdpKey": "A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk="
});

var DEV_KEYS = new proto.LDPublicKeys({
	"ClusterEndpoints": {
		"ONE": ["https://dev.omapi.net:3829"]
	},
	"ClusterKeys": {
		"ONE": "80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA="
	},
	"DefaultCluster": "ONE",
	"IdpEndpoints": ["https://dev.omapi.net:4001"],
	"IdpKey": "A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk="
});

function Client(configuration) {
	if (!configuration) configuration = {};
	this._enabled = false;
	this._keys = TEST_KEYS;
	this._instance = "";
	this._sync = false;
	this._config = configuration;

	var storage;
	if (typeof localStorage === 'undefined') {
		var LocalStorage = require('node-localstorage').LocalStorage;
		storage = new LocalStorage('./omlib.db');
	} else {
		storage = localStorage;
	}

	this._storage = storage;
	if (configuration) {
		if (configuration.keys)
			this._keys = configuration.keys;
		if (configuration.instance)
			this._instance = configuration.instance;
		if (configuration.apiKey) {
			this._apiKey = configuration.apiKey;
		}
		if (configuration.sync) {
			this._sync = true;
		}
		if (configuration.storage) {
			this._storage = configuration.storage;
		}
	}

	this._keyItem = this._instance + ":" + this._keys.IdpKey.toString("hex") + ":" + this._keys.IdpEndpoints[0] + ":key";
	this._detailsItem = this._instance + ":" + this._keys.IdpKey.toString("hex") + ":" + this._keys.IdpEndpoints[0] + ":details";

	if (configuration && configuration.reset)
		this.erasePrivateKey();

	this._privateKey = this._storage.getItem(this._keyItem);
	if (this._privateKey) {
		this._privateKey = new Buffer(this._privateKey, "base64");
	} else {
		console.log("generating new private key");
		this._privateKey = ourcrypto.createPrivateKey();
		var serialized = this._privateKey.toString("base64");
		this._storage.setItem(this._keyItem, serialized);
	}
	this.publicKey = ourcrypto.generatePublicKey(this._privateKey);

	this._details = this._storage.getItem(this._detailsItem);
	if (this._details) {
		this._details = new proto.LDAccountDetails(JSON.parse(this._details));
		this.account = this._details.Account;
	}

	this._idp = new connection.Connection(connection.IDP_CLUSTER, "/device", this._keys, this._privateKey, this._apiKey);
	this._idp.onInterrupted = this._onInterrupted.bind(this);
	this._idp.onDeviceInvalid = this._onDeviceInvalid.bind(this);
	if (this._details && this._details.Account) {
		this._msg = new connection.Connection(this._details.Cluster, "/device", this._keys, this._privateKey, this._apiKey);
	} else {
		this._msg = new connection.Connection(undefined, undefined, this._keys, this._privateKey, this._apiKey);
	}
	this._msg.onInterrupted = this._onInterrupted.bind(this);
	this._msg.debug = false;
	this._msg.onDeviceInvalid = this._onDeviceInvalid.bind(this);

	this.longdanMessageConsumer = new LongdanMessageConsumer(this);
	this.longdanMessageProcessor = new LongdanMessageProcessor(this);
	this.longdanDurableJobProcessor = new LongdanDurableJobProcessor(this);

	this.auth = new AuthUtils(this);
	this.blob = new BlobUtils(this);
	this.feed = new FeedUtils(this);
	this.identity = new IdentityUtils(this);
	this.messaging = new MessagingUtils(this);
	this.store = new OmStore(this);
	this.events = new OmEvent(this);

	if (this.account) {
		// hack until our storage is combined
		this._ensureOwnedAccount(this.account);
	}
}

Client.prototype.resetConnections = function() {
	this._msg.resetConnection();
	this._idp.resetConnection();
}

Client.prototype.onInterrupted = null; // function(cause)
Client.prototype.account = null;
Client.prototype.onSignedUp = null;
Client.prototype.onDeviceInvalid = null;

Client.prototype.erasePrivateKey = function() {
	this._storage.removeItem(this._keyItem);
	this._storage.removeItem(this._detailsItem);
}

Client.prototype._saveDetails = function(details) {
	this._details = details;
	this._storage.setItem(this._detailsItem, JSON.stringify(details.encode()));
	var myAccount = details.Account;
	this.account = myAccount;
	this._ensureOwnedAccount(myAccount);
}

Client.prototype._ensureOwnedAccount = function(myAccount) {
	this.store.getAccounts(function(accountsDb) {
		accountsDb.getOrCreateObject(myAccount, function(account) {
			if (!account.owned) {
				account.owned = true;
				accountsDb.update(account);
			}
		}.bind(this));
	}.bind(this));
}

Client.prototype._createMsg = function() {
	this._msg.onInterrupted = this._onInterrupted.bind(this);
}
Client.prototype._onInterrupted = function(cause) {
	if (this.onInterrupted)
		this.onInterrupted(cause);
}
Client.prototype._onDeviceInvalid = function() {
	this.erasePrivateKey();
	this.disable();
	if (this.onDeviceInvalid)
		this.onDeviceInvalid();
}
Client.prototype.isRegistered = function() {
	return this._details && this._details.Account;
}

Client.prototype.idpCall = function(req, callback) {
	return this._idp.call(req, callback);
}
Client.prototype.msgCall = function(req, callback) {
	return this._msg.call(req, callback);
}

Client.prototype.signin = function(code, queryKey) {
	var req = new proto.LDConfirmAuthCodeRequest();
	req.AuthCode = code;
	req.QueryKey = queryKey;

	this.idpCall(req, function(e, resp) {
		if (e) {
			console.log('error:' + e);
		} else {
			this._saveDetails(resp.AccountDetails);
			this._msg._setCluster(this._details.Cluster, "/device");
			this._idp.onInterrupted = null;
			this._idp.disable();
			this._msg.enable();
			if (this.onSignedUp)
				this.onSignedUp();
		}
	}.bind(this));
}

Client.prototype._waitForSignin = function() {
	this._signinTimer = setTimeout(this._pollSignin.bind(this), 0);
}

Client.prototype._pollSignin = function() {
	this._signinTimer = undefined;
	this._idp.call(new proto.LDCheckIdentityLinkedRequest(), this._polledSignin.bind(this));

}
Client.prototype._polledSignin = function(err, resp, req) {
	if (!this._enabled)
		return;
	if (!err && resp.AccountDetails != null) {
		this._saveDetails(resp.AccountDetails);
		this._msg._setCluster(this._details.Cluster, "/device");
		this._idp.onInterrupted = null;
		this._idp.disable();
		this._msg.enable();
		if (this.onSignedUp)
			this.onSignedUp();
	} else {
		this._signinTimer = setTimeout(this._pollSignin.bind(this), 3000); //TODO: better/push
	}
}
Client.prototype._cancelWaitForSignin = function() {
	if (this._signinTimer) {
		clearTimeout(this._signinTimer);
		this._signinTimer = undefined;
	}
}

Client.prototype.enable = function() {
	if (this._enabled)
		return;
	this._enabled = true;
	if (this._sync)
		this.longdanMessageConsumer.start();
	this.longdanDurableJobProcessor.start();
	if (this.account) {
		this._msg.enable();
	} else {
		this._idp.enable();
		this._waitForSignin();
	}
}

Client.prototype.disable = function() {
	if (!this._enabled)
		return;
	this._enabled = false;
	if (this.account) {
		this._msg.disable();
	} else {
		this._cancelWaitForSignin();
		this._idp.disable();
	}
}

Client.prototype._configs = {
	default: TEST_KEYS,
	test: TEST_KEYS,
	dev: DEV_KEYS,
	local: LOCAL_TEST_KEYS
}

Client.prototype.PermanentFailure = connection.PermanentFailure;
Client.prototype.TemporaryFailure = connection.TemporaryFailure;

module.exports = Client;
Object.freeze(module.exports);