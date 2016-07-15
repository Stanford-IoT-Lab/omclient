var async = require("async");
var websocket = require('websocket');
var ourcrypto = require('../util/crypto');

var LDResponseContainerBase = require('./ldproto/LDResponseContainerBase');
var LDHelloChallengeRequest = require('./ldproto/LDHelloChallengeRequest');
var LDCompleteChallengeRequest = require('./ldproto/LDCompleteChallengeRequest');
var LDPingRequest = require('./ldproto/LDPingRequest');
var ExtendableError = require('es6-error');

var IDP_CLUSTER = "idp";
var BASE_BACKOFF = 3 * 1000;
var MAX_BACKOFF = 5 * 60 * 1000;
var KEEPALIVE_MS = 56 * 1000;
var OMLIB_VERSION = 0;
var DEBUG = false;


var LDInboxDeliveryMessagePush = require('./ldproto/LDInboxDeliveryMessagePush');
var LDMessageDeliveryPush = require('./ldproto/LDMessageDeliveryPush');
var LDPublicChatMessageDeliveryPush = require('./ldproto/LDPublicChatMessageDeliveryPush');
var LDRealtimeMessageDeliveryPush = require('./ldproto/LDRealtimeMessageDeliveryPush');
var LDInboxDeliveryTerminatedPush = require('./ldproto/LDInboxDeliveryTerminatedPush');
var LDDeviceRegistrationStateChangedPush = require('./ldproto/LDDeviceRegistrationStateChangedPush');

var PushProtocols = require('./ldproto/PushProtocols');

function fixPort(cond, u) {
	if (u.indexOf(cond) != 0)
		return u;
	if (!/:\d+/.test(u))
		return u;
	var p = u.match(/:(\d+)/)[1];
	var dp = -1 + parseInt(p);
	return u.replace(p, dp.toString())
}

function makeWsPath(b, p) {
	if (process.browser) {
		if (document.location.href.indexOf("https") == 0) {
			b = fixPort("http://", b);
			b = b.replace("http://", "wss://");
			b = fixPort("https://", b);
			b = b.replace("https://", "wss://");
		} else {
			b = fixPort("https://", b);
			b = b.replace("https://", "wss://");
			b = b.replace("http://", "ws://");
		}
	} else if (b.indexOf("127.0.0.1") >= 0) {
		b = b.replace("http://", "ws://");
		b = b.replace("https://", "wss://");
	} else {
		b = b.replace("http://", "wss://");
		b = b.replace("https://", "wss://");
	}
	if (b.charAt(b.length - 1) == '/' && p.charAt(0) == '/')
		return b + p.substring(1);
	if (!b.charAt(b.length - 1) == '/' && !p.charAt(0) == '/')
		return b + "/" + p;
	return b + p;
};

function rand(max) {
	return Math.floor(Math.random() * (max));
}

function firstNotNull(o, d) {
	for (var k in o) {
		var s = o[k];
		if (s === null || s === undefined)
			continue;
		if (typeof(s) == "object") {
			if (d == 1)
				return s;
			var c = firstNotNull(s, d - 1);
			if (c !== null && c !== undefined)
				return c;
		}
	}
	return null;
}

function extractProtocol(o, d, p) {
	if (d == 0) return { path: p, data: o };
	if (p === undefined) p = '';

	for (var k in o) {
		var s = o[k];
		if (s === null || s === undefined)
			continue;
		if (typeof(s) == "object") {
			return extractProtocol(s, d - 1, p.length == 0 ? k : `${p}.${k}`);
		}
	}
}

class SessionListener {
	onSessionEstablished(conn) {
	}

	onSessionDisconnected(conn) {
	}
}

class WaitingRequest {

	constructor(req, cb) {
		this.request = req;
		this.callback = cb; // function (error, resp, req)
	}
}

class PendingRequest {

	constructor(wrapped, req, cb) {
		this.wrapped = wrapped;
		this.request = req;
		this.callback = cb; // function (error, resp, req)
	}
}

class PermanentFailure extends ExtendableError {

	constructor(e) {
		super(e);
		this.error = e;
		this.permanent = true;
	}

	toString() {
		return "Permanent Failure: " + this.error;
	}
}

class TemporaryFailure extends ExtendableError {

	constructor(e) {
		super(e);
		this.error = e;
		this.permanent = false;
	}

	toString() {
		return "Temporary Failure: " + this.error;
	}
}

class Abort extends ExtendableError {

	constructor() {
		super("Aborting");
		this.error = "Aborting";
		this.permanent = true;
	}

	toString() {
		return "Aborted: ";
	}
}

class Connection {

	constructor(cluster, target, configuration, privateKey, apiKey) {
		this._cluster = cluster;
		this._configuration = configuration;
		this.serverTimeDelta = 0;
		this.lastRtt = 0;
		this.keepaliveMs = KEEPALIVE_MS;

		this.onPush = null; // function(push);
		this.onInterrupted = null; //function(cause);
		this.onDeviceInvalid = null; //function();
		this.connected = false;
		this.connectionId = 0;
		this.debug = DEBUG;
		this._sessionListenerId = 0;
		this._sessionListeners = {};

		if (cluster == IDP_CLUSTER) {
			this._serverPublicKey = this._configuration.IdpKey;
			this._endpoint = makeWsPath(this._configuration.IdpEndpoints[rand(this._configuration.IdpEndpoints.length)], target);
			this._requestWrapper = 'makeIdpRpc';
		} else {
			if (cluster)
				this._setCluster(cluster, target);
			this._requestWrapper = 'makeClusterRpc';
		}

		if (apiKey) {
			this._apiKey = new Buffer(apiKey.Id, "hex");
			this._apiSecret = new Buffer(apiKey.Secret, "hex");
		} else {
			this._apiKey = null;
			this._apiSecret = null;
		}

		this._privateKey = privateKey;
		this._publicKey = ourcrypto.generatePublicKey(privateKey);
		this._waiting = []; // WaitingRequest array
		this._pending = {}; // reqId:RequestWithCallback dictionary};
	}

	incrementInterest() {
	}

	decrementInterest() {
	}

	_setCluster(cluster, target) {
		if (!(cluster in this._configuration.ClusterKeys))
			throw "missing cluster info " + cluster;
		this._serverPublicKey = this._configuration.ClusterKeys[cluster];
		this._endpoint = makeWsPath(this._configuration.ClusterEndpoints[cluster][rand(this._configuration.ClusterEndpoints[cluster].length)], target);
	}

	_setReadOnly(target) {
		this._serverPublicKey = this._configuration.ReadOnlyKey;
		this._endpoint = makeWsPath(this._configuration.ReadOnlyEndpoints[rand(this._configuration.ReadOnlyEndpoints.length)], target);
	}

	_verbose(m) {
		if (this.debug)
			console.log(m);
	};

	_warn(m, o) {
		console.log("warn: " + m);
		if (o) {
			console.log(o);
		}
	};

	enable() {
		if (!this._endpoint)
			throw new Error("Must register with IDP!");
		if (this._enabled)
			return;
		this._enabled = true;
		this._connect();
	};

	_connect() {
		if (this._client) {
			console.warn("Closing existing connection...");
			this._safeCloseConnection();
		}

		this._nextRequestId = 1;
		this._client = new websocket.w3cwebsocket(this._endpoint);
		this._client.onopen = this._onopen.bind(this);
		this._client.onmessage = this._onmessage.bind(this);
		this._client.onclose = this._onclose.bind(this);
		this._client.onerror = this._onerror.bind(this);
	};

	_safeCloseConnection() {
		if (this._client) {
			try {
				this.connected = false;
				this._client.close();
				this._client.onopen = undefined;
				this._client.onmessage = undefined;
				this._client.onclose = undefined;
				this._client.onerror = undefined;
				this._client = undefined;
			} catch (e) {
				console.warn("Error closing existing client", e);
			}
		}
	}

	_clearBackoff(reason) {
		if (this._backoffTimer)
			clearTimeout(this._backoffTimer);
		this._backoffTimer = undefined;
		this._lastFailure = undefined;
		this._nextReschedule = undefined;
	}

	_backoff(reason) {
		var interrupted = false;
		if (this._client) {
			this._safeCloseConnection();
			interrupted = true;
		}
		this._sentChallenge = undefined;
		this._authenticated = undefined;
		if (reason.constructor == Abort) {
			this._clearBackoff();
			this._enabled = undefined;
		} else if (reason.constructor == PermanentFailure) {
			if (reason.error == "BadAuthentication" || reason.error == "DeviceNotFound") {
				if (this.onDeviceInvalid)
					this.onDeviceInvalid();
				this.disable();
				return;
			}
		}
		var now = new Date().getTime();
		if (!this._nextReschedule) {
			//first error
			this._lastFailure = now;
			this._nextReschedule = now + BASE_BACKOFF;
			this._backoffTimer = setTimeout(this._retry.bind(this), BASE_BACKOFF);
		} else if (this._backoffTimer) {
			//already waiting
			this._verbose("repeated backoffs in progress, supressing");
		} else {
			var last_timeout = this._nextReschedule - this._lastFailure;
			this._lastFailure = now;
			this._nextReschedule = now + Math.min(last_timeout * 2, MAX_BACKOFF);
			this._backoffTimer = setTimeout(this._retry.bind(this), this._nextReschedule - this._lastFailure);
		}
		this._abortRequests();
		if (interrupted && typeof(this.onInterrupted) == "function") {
			this.onInterrupted(reason);
		}
	};

	_retry(reason) {
		this._backoffTimer = undefined;
		if (this._enabled)
			this._connect();
	}

	resetConnection() {
		this._retry();
	}

	disable() {
		if (!this._enabled)
			return;
		this._enabled = undefined;
		if (this._client) {
			this._safeCloseConnection();
		}
		this._clearBackoff(new Abort());
	};


	_sendResponse(wrapped) {
		var body = JSON.stringify(wrapped);
		this._verbose(body);
		this._client.send(body);
	};

	_call(req, callback) {
		var reqId = this._nextRequestId++;
		var wrapped = req[this._requestWrapper](reqId);

		var rcb = new PendingRequest(wrapped, req, callback);
		this._pending[reqId] = rcb;

		var body = JSON.stringify(wrapped);
		this._verbose(body);
		this._client.send(body);
	}

	_enqueue(req, callback) {
		if (!this._endpoint)
			this._warn("enqueueing message request before registered");
		var wr = new WaitingRequest(req, callback);
		this._waiting.push(wr);
	}

	call(req, callback) {
		if (this._authenticated)
			this._call(req, callback);
		else
			this._enqueue(req, callback);
	}

	_sendHello() {
		var req = new LDHelloChallengeRequest();
		req.SourceKey = this._publicKey;
		req.ApiKey = this._apiKey;
		req.DestinationChallenge = this._challengeForServer = ourcrypto.createNonce();
		this._call(req, this._ackHello.bind(this));
	};

	_ackHello(error, resp, req) {
		if (error) {
			if (error.constructor == PermanentFailure && error.error == "DeviceNotFound") {
				this._warn("device no longer valid");
				if (this.onDeviceInvalid)
					this.onDeviceInvalid();
				this.disable();
				return;
			}

			this._backoff(error);
			return;
		}

		var response = resp.DestinationResponse;
		var challenge = resp.SourceChallenge;

		var shared = ourcrypto.computeShared(this._privateKey, Buffer.from(this._serverPublicKey, 'base64'));

		var sha = ourcrypto.createSHA256();
		sha.update(new Buffer([1]));
		sha.update(new Buffer(shared));
		sha.update(new Buffer(this._challengeForServer));
		if (sha.digest('base64') != response.toString('base64')) {
			this._warn("server failed challenge");
			this._backoff(new TemporaryFailure("server failed challenge"));
			return;
		}

		sha = ourcrypto.createSHA256();
		sha.update(new Buffer([2]));
		sha.update(new Buffer(shared));
		sha.update(new Buffer(challenge));
		var sourceResponse = new Buffer(sha.digest('base64'), 'base64');

		var appResponse = null;
		if (this._apiSecret) {
			sha = ourcrypto.createSHA256();
			sha.update(new Buffer(this._apiSecret));
			sha.update(new Buffer(challenge));
			appResponse = new Buffer(sha.digest('base64'), 'base64');
		}
		var req = new LDCompleteChallengeRequest();
		req.Type = "JS-Omlib";
		req.OmlibVersion = OMLIB_VERSION;
		if (typeof window === 'undefined') {
			req.OsVersion = "Node";
		} else {
			req.OsVersion = "Browser";
		}
		req.SourceResponse = sourceResponse;
		req.AppChallengeResponse = appResponse;
		this._sentChallenge = true;
		this._call(req, this._pumpRequests.bind(this));
	};

	sendPing(delay, lastRtt, cb) {
		if (!this.connected) {
			cb(new TemporaryFailure("NotConnected"));
			return;
		}
		var req = new LDPingRequest();
		req.NextPingDelayMs = delay;
		req.LastRtt = lastRtt;
		var start = new Date().getTime();
		this._call(req, this._ackPing.bind(this, start, cb));
	};

	_ackPing(start, cb, error, resp, req) {
		var end = new Date().getTime();
		if (error) {
			if (typeof cb == 'function')
				cb(error);
			return;
		}

		this.lastRtt = end - start;
		this.serverTimeDelta = Math.round(resp.UtcMillis - end + this.lastRtt / 2);
		if (typeof cb == 'function')
			cb(undefined, resp.ObservedIp, resp.UtcMillis);
	};

	_keepAlive(connId) {
		if (this.keepaliveMs <= 0)
			return;

		if (!this.connected || this.connectionId != connId)
			return;

		this.sendPing(this.keepaliveMs, this.lastRtt, () => {
			setTimeout(this._keepAlive.bind(this, connId), this.keepaliveMs);
		});

	}

	_pumpRequests(error, resp, req) {
		if (error) {
			this._backoff(error);
			return;
		}
		this._authenticated = true;
		for (var i = 0; i < this._waiting.length; ++i)
			this._call(this._waiting[i].request, this._waiting[i].callback);
		this._waiting = undefined; //no waiting requests while we are running
	}

	_abortRequests(error) {
		var pending = this._pending;
		this._pending = {};
		for (var k in this._pending) {
			try {
				pending[k].callback(reason, undefined, pending[k].request);
			} catch (e) {
				this._warn("failure in callback for abort pending" + e, e);
				this._verbose(e.stack);
			}
		}
		var waiting = this._waiting;
		this._waiting = [];
		for (var i = 0; i < this._waiting; ++i) {
			try {
				waiting[i].callback(reason, undefined, waiting[i].request);
			} catch (e) {
				this._warn("failure in callback for abort waiting " + e, e);
				this._verbose(e.stack);
			}
		}
	}

	_onerror(e) {
		this._warn('error' + e);
		this.connected = false;
		this._verbose(e);
		this._backoff(new TemporaryFailure(e));
	};

	_onopen() {
		this._warn('connected');
		this.connected = true;
		this.connectionId++;
		this._clearBackoff();

		//this._keepAlive(this.connectionId);
		if (!this._monitoring)
			this._sendHello();

		for (var k in this._sessionListeners) {
			var l = this._sessionListeners[k];
			if (typeof l.onSessionEstablished == 'function') {
				async.nextTick(() => {
					l.onSessionEstablished(this);
				});
			}
		}
	};

	_onclose(e) {
		this._warn('closed: ' + e.reason + " (" + e.code + ")");
		this.connected = false;

		for (var k in this._sessionListeners) {
			var l = this._sessionListeners[k];
			if (typeof l.onSessionDisconnected == 'function') {
				async.nextTick(() => {
					l.onSessionDisconnected(this);
				});
			}
		}

		if (e.code != 1000)
			this._backoff(new TemporaryFailure(e.reason));
	}

	addSessionListener(listener) {
		var id = this._sessionListenerId++;
		this._sessionListeners[id] = listener;

		if (this.connected) {
			if (typeof listener.onSessionEstablished == 'function') {
				async.nextTick(() => {
					listener.onSessionEstablished(this);
				});
			}
		}

		return function() {
			delete this._sessionListeners[id];
		}
	}

	_extractResponse(resp, raw, cls) {
		if (resp.HelloChallenge)
			return resp.HelloChallenge;
		if (resp.CompleteChallenge)
			return resp.CompleteChallenge;
		if (resp.Simple)
			return resp.Simple.Value;
		if (resp.Ping)
			return resp.Ping;
		return new cls(firstNotNull(raw, 2));
	}

	_extractPush(rawRequest) {
		var p = extractProtocol(rawRequest, 2);
		var cls = PushProtocols[p.path];
		if (cls) {
			return new cls(p.data);
		} else {
			console.warn("Missing push path '" + p.path + "'");
			return null;
		}
	}

	_onmessage(e) {
		//When isn't this string??
		if (typeof e.data !== 'string')
			return;

		this._verbose("Received: '" + e.data + "'");
		var jsonData = JSON.parse(e.data);
		var rawResponse = jsonData['r'];
		if (rawResponse) {
			var resp = new LDResponseContainerBase(rawResponse);
			var seqNum = resp.SequenceNumber;
			var rcb = this._pending[seqNum];
			if (!rcb) {
				this._warn("unknown request id " + seqNum);
				this._verbose(resp);
				this._backoff(new Abort());
				return;
			}
			delete this._pending[seqNum];
			if (resp.ErrorCode || resp.ErrorDetail) {
				if (!rcb.callback) {
					this._warn("failure in callback for response " + e);
					this._verbose(rcb.request);
				} else {
					try {
						if (resp.ErrorCode && resp.ErrorCode != "UnknownError")
							rcb.callback(new PermanentFailure(resp.ErrorCode), undefined, rcb.request);
						else
							rcb.callback(new TemporaryFailure(resp.ErrorCode || resp.ErrorDetail), undefined, rcb.request);
					} catch (e) {
						this._warn("failure in callback for response " + e);
						this._verbose(rcb.request);
						throw e;
					}
				}
				return;
			}

			if (rcb.callback) {
				var extracted = this._extractResponse(resp, rawResponse, rcb.request.__rt);
				try {
					rcb.callback(undefined, extracted, rcb.request);
				} catch (e) {
					this._warn("failure in callback for success " + e, e);
					this._verbose(resp);
					this._verbose(extracted);
					throw e;
				}
			}
		} else {
			var rawRequest = jsonData['q'];
			var extracted = this._extractPush(rawRequest);
			if (extracted != null) {
				if (!this.onPush) {
					this._warn("unhandled push: " + e.data);
				} else {
					try {
						this.onPush(extracted);
					} catch (e) {
						this._warn("failure in callback for push " + e, e);
						this._verbose(resp);
						this._verbose(extracted);
						throw e;
					}
				}
			}
			var wrapper = {
				'r': {
					'#': jsonData['q']['#']
				}
			};
			this._sendResponse(wrapper);
		}
	}
}


module.exports = {
	IDP_CLUSTER,
	Connection,
	PermanentFailure,
	TemporaryFailure,
	SessionListener
};
Object.freeze(module.exports);
