// -*- tab-width: 4 -*-

var ldKeys = require("../longdan/ldkeys");
var connection = require('../longdan/connection');
var ourcrypto = require('../util/crypto');

var LongdanMessageProcessor = require('./LongdanMessageProcessor');
var LongdanMessageConsumer = require('./LongdanMessageConsumer');
var LongdanDurableJobProcessor = require('./LongdanDurableJobProcessor');

var AuthUtils = require('./ClientAuthUtils');
var BlobUtils = require('./ClientBlobUtils');
var FeedUtils = require('./ClientFeedUtils');
var IdentityUtils = require('./ClientIdentityUtils');
var MessagingUtils = require('./ClientMessagingUtils');

var OmStore = require('./store/OmStore');
var OmEvent = require('./OmEvent');

var http = require('http');
var https = require('https');
var url = require('url');

var LDAccountDetails = require('../longdan/ldproto/LDAccountDetails');
var LDConfirmAuthCodeRequest = require('../longdan/ldproto/LDConfirmAuthCodeRequest');
var LDCheckIdentityLinkedRequest = require('../longdan/ldproto/LDCheckIdentityLinkedRequest');

class Client {

	constructor(config) {
		if (!config) config = {};
		this._enabled = false;
		this._sync = false;
		this._config = config;
		this._crypto = ourcrypto;

		this.PermanentFailure = connection.PermanentFailure;
		this.TemporaryFailure = connection.TemporaryFailure;

		this.onInterrupted = null; // function(cause)
		this.account = null;
		this.onSignedUp = null;
		this.onDeviceInvalid = null;

		var storage;
		if (config.storage) {
			storage = config.storage;
		} else if (typeof window === 'undefined') {
			var LocalStorage = require('node-localstorage').LocalStorage;
			storage = new LocalStorage(config.storagePath);
		} else if (this.supportsLocalStorage()) {
			storage = localStorage;
		} else {
			var CookieLocalStorage = require('./store/CookieLocalStorage');
			storage = new CookieLocalStorage();
		}
		this._storage = storage;
		
		this._keys = (config.keys) ? config.keys : ldKeys.prod;
		this._instance = config.instance;

		if (config.apiKey) {
			this._apiKey = config.apiKey;
		}

		if (config.sync) {
			this._sync = true;
		}
		
		this._keyItem = this._instance + ":" + this._keys.IdpKey.toString("hex") + ":" + this._keys.IdpEndpoints[0] + ":key";
		this._detailsItem = this._instance + ":" + this._keys.IdpKey.toString("hex") + ":" + this._keys.IdpEndpoints[0] + ":details";

		if (config.reset) {
			this.erasePrivateKey();
		}

		this._privateKey = this._storage.getItem(this._keyItem);
		if (this._privateKey) {
			this._privateKey = new Buffer(this._privateKey, "base64");
		} else {
			console.log("generating new private key");
			this._privateKey = this._crypto.createPrivateKey();
			var serialized = this._privateKey.toString("base64");
			this._storage.setItem(this._keyItem, serialized);
		}
		this.publicKey = this._crypto.generatePublicKey(this._privateKey);

		this._details = this._storage.getItem(this._detailsItem);
		if (this._details) {
			this._details = new LDAccountDetails(JSON.parse(this._details));
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

	supportsLocalStorage() {
		if (typeof localStorage === 'undefined') return false;
		try {
			var test = 'test';
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			return true;
		} catch (e) {
			return false;
		}
	}

	resetConnections() {
		this._msg.resetConnection();
		this._idp.resetConnection();
	}

	erasePrivateKey() {
		this._storage.removeItem(this._keyItem);
		this._storage.removeItem(this._detailsItem);
	}

	_saveDetails(details) {
		this._details = details;
		this._storage.setItem(this._detailsItem, JSON.stringify(details.encode()));
		var myAccount = details.Account;
		this.account = myAccount;
		this._ensureOwnedAccount(myAccount);
	}

	_ensureOwnedAccount(myAccount) {
		this.store.getAccounts((accountsDb) => {
			accountsDb.getOrCreateObject(myAccount, (account) => {
				if (!account.owned) {
					account.owned = true;
					accountsDb.update(account);
				}
			});
		});
	}

	_createMsg() {
		this._msg.onInterrupted = this._onInterrupted.bind(this);
	}

	_onInterrupted(cause) {
		if (this.onInterrupted)
			this.onInterrupted(cause);
	}
	
	_onDeviceInvalid() {
		this.erasePrivateKey();
		this.disable();
		if (this.onDeviceInvalid)
			this.onDeviceInvalid();
	}

	isRegistered() {
		return this._details && this._details.Account;
	}

	idpCall(req, callback) {
		return this._idp.call(req, callback);
	}

	msgCall(req, callback) {
		return this._msg.call(req, callback);
	}

	signin(code, queryKey) {
		var req = new LDConfirmAuthCodeRequest();
		req.AuthCode = code;
		req.QueryKey = queryKey;

		this.idpCall(req, (e, resp) => {
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
		});
	}

	_waitForSignin() {
		this._signinTimer = setTimeout(() => this._pollSignin(), 0);
	}

	_pollSignin() {
		this._signinTimer = undefined;
		this._idp.call(new LDCheckIdentityLinkedRequest(), (err, resp, req) => this._polledSignin(err, resp, req));

	}
	
	_polledSignin(err, resp, req) {
		if (!this._enabled)
			return;
		if (!err && resp.AccountDetails != null) {
			this._saveDetails(resp.AccountDetails);
			this._msg._setCluster(this._details.Cluster, "/device");
			this._idp.onInterrupted = null;
			this._idp.disable();
			this._msg.enable();
			if (typeof this.onSignedUp === 'function')
				this.onSignedUp();
		} else {
			this._signinTimer = setTimeout(() => this._pollSignin(), 3000); //TODO: better/push
		}
	}

	_cancelWaitForSignin() {
		if (this._signinTimer) {
			clearTimeout(this._signinTimer);
			this._signinTimer = undefined;
		}
	}

	enable() {
		if (this._enabled)
			return;
		this._enabled = true;
		this.longdanDurableJobProcessor.start();
		this.longdanMessageConsumer.start();

		if (this.account) {
			this._msg.enable();
		} else {
			if (this._config.anonymous){
				this._msg._setReadOnly("/readonlydevice");
				this._msg.enable();
			} else {
				this._idp.enable();
				this._waitForSignin();
			}
		}
	}

	disable() {
		if (!this._enabled)
			return;
		this._enabled = false;
		if (this.account) {
			this._msg.disable();
		} else {
			if (this._config.anonymous) {
				this._msg.disable();
			} else {
				this._cancelWaitForSignin();
				this._idp.disable();
			}
		}
	}
}

module.exports = Client;
Object.freeze(module.exports);
