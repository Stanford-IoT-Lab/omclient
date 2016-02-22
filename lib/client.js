// -*- tab-width: 4 -*-

var proto = require("./ldproto");
var connection = require('./connection');
var ourcrypto = require('./crypto');

var LongdanMessageProcessor = require('./client/longdanMessageProcessor');
var LongdanMessageConsumer = require('./client/longdanMessageConsumer');
var LongdanDurableJobProcessor = require('./client/LongdanDurableJobProcessor');

// Exposed APIs
var AuthUtils = require('./client/ClientAuthUtils');
var BlobUtils = require('./client/ClientBlobUtils');
var FeedUtils = require('./client/ClientFeedUtils');
var IdentityUtils = require('./client/ClientIdentityUtils');
var MessagingUtils = require('./client/ClientMessagingUtils');

// Internal helpers
var FeedHelpers = require('./client/helpers/FeedHelpers');
var IdentityHelpers = require('./client/helpers/IdentityHelpers');

var OmStore = require('./client/OmStore');
var OmEvent = require('./client/omevent');


var crypto = require('crypto');
var http = require('http');
var https = require('https');
var url = require('url');


var TEST_KEYS = new proto.LDPublicKeys({
	"ClusterEndpoints": {
		"ONE": ["http://us.omlet.me"],
		"TWO": ["http://sg.omlet.me"],
		"THREE": ["http://cn.omlet.me"],
		"FOUR": ["http://de.omlet.me"],
		"yeouiju": ["http://0.omlet.me:3822"]
	},
	"ClusterKeys": {
		"ONE": "xkkzyNJmZ1DmNPxGwrykZ2O91f10KNXQvspa15nKKGs=",
		"TWO": "XaG4I7b7wDOZ+lGHSPwbJ2HLkIFf0UGYAWz9c9LkiQk=",
		"THREE": "hj/8xrbYZvZkeOjoN9ndTj+2HAICPXDfK3D/Tfl2nDY=",
		"FOUR": "xMRCvh1eki9JEceBcV7Bx49uaQYpX8FdD0eZ+LCGqCc=",
		"yeouiju": "YFmj7ucCh8lQZGSwtuMPAqLjcT9dkVclxB01IgXu6Hk="
	},
	"DefaultCluster": "ONE",
	"IdpEndpoints": ["http://idp.omlet.me"],
	"IdpKey": "MIOC9PS8KIwXOXSHtplBZLSpIqcifns0jzExtkHXw1g="
});

var LOCAL_TEST_KEYS = new proto.LDPublicKeys({
    "ClusterEndpoints": { "ONE": ["http://127.0.0.1:3829"] },
    "ClusterKeys": { "ONE": "80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA=" },
    "DefaultCluster": "ONE",
    "IdpEndpoints": ["http://127.0.0.1:4001"],
    "IdpKey": "A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk="
});

var DEV_KEYS = new proto.LDPublicKeys({
    "ClusterEndpoints": {"ONE":["http://dev.omapi.net:3829"]},
    "ClusterKeys":{"ONE":"80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA="},
    "DefaultCluster":"ONE",
    "IdpEndpoints":["http://dev.omapi.net:4001"],
    "IdpKey":"A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk="
});

function Client(configuration) {
    this._enabled = false;
    this._keys = TEST_KEYS;
    this._instance = "";
	this._sync = false;
    this._storage = (typeof window !== 'undefined' ? window.localStorage : null);
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
    if (this._details && this._details.Account)
        this._msg = new connection.Connection(this._details.Cluster, "/device", this._keys, this._privateKey, this._apiKey);
    else
        this._msg = new connection.Connection(undefined, undefined, this._keys, this._privateKey, this._apiKey);
    this._msg.onInterrupted = this._onInterrupted.bind(this);
    this._msg.debug = false;
    this._msg.onDeviceInvalid = this._onDeviceInvalid.bind(this);

	if(this._sync) {
		this.longdanMessageConsumer = new LongdanMessageConsumer(this);
		this.longdanMessageProcessor = new LongdanMessageProcessor(this);
		this.longdanDurableJobProcessor = new LongdanDurableJobProcessor(this);
	}

    this.auth = new AuthUtils(this);
    this.blob = new BlobUtils(this);
    this.feed = new FeedUtils(this);
    this.identity = new IdentityUtils(this);
    this.messaging = new MessagingUtils(this);
    this.store = new OmStore(this);
    this.events = new OmEvent(this);

    this._feed = new FeedHelpers(this);
    this._identity = new IdentityHelpers(this);

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
	if(this._sync) {
		this._ensureOwnedAccount(myAccount);
	}
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

Client.prototype._createMsg = function () {
    this._msg.onInterrupted = this._onInterrupted.bind(this);
}
Client.prototype._onInterrupted = function (cause) {
    if (this.onInterrupted)
        this.onInterrupted(cause);
}
Client.prototype._onDeviceInvalid = function () {
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
Client.prototype.msgCall = function (req, callback) {
    return this._msg.call(req, callback);
}

Client.prototype.signin = function(code, queryKey){
    var req = new proto.LDConfirmAuthCodeRequest();
	req.AuthCode = code;
	req.QueryKey = queryKey;

	this.idpCall(req, function(e, resp){
		if(e) {
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

Client.prototype._waitForSignin = function()
{
    this._signinTimer = setTimeout(this._pollSignin.bind(this), 0);
}

Client.prototype._pollSignin = function() {
    this._signinTimer = undefined;
    this._idp.call(new proto.LDCheckIdentityLinkedRequest(), this._polledSignin.bind(this));

}
Client.prototype._polledSignin = function (err, resp, req) {
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
Client.prototype._cancelWaitForSignin = function () {
    if (this._signinTimer) {
        clearTimeout(this._signinTimer);
        this._signinTimer = undefined;
    }
}

Client.prototype.enable = function() {
    if (this._enabled)
        return;
    this._enabled = true;
	if(this._sync) {
		this.longdanMessageConsumer.start();
		this.longdanDurableJobProcessor.start();
    }
    if (this.account) {
        this._msg.enable();
    } else {
        this._idp.enable();
        this._waitForSignin();
    }
}
Client.prototype.disable = function () {
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

// DEPRECATED, see client.blob
Client.prototype.uploadBlob = function(data, mime, cb) {
    var req = new proto.LDGetUploadTicketRequest();
    req.Account = this.account;
    req.Metadata = new proto.LDBlobMetadata();
    req.Metadata.MimeType = mime;
    req.Metadata.Size = data.length;

    var md5 = crypto.createHash('md5');
    md5.update(data);
    req.Metadata.Hash = md5.digest("base64");

    this.msgCall(req, this._gotUploadTicket.bind(this, data, cb));

}

// DEPRECATED, see client.blob
Client.prototype._gotUploadTicket = function (data, cb, e, resp) {
    if (e) {
        cb(e);
        return;
    }
    var ticket = resp.BlobUploadTicket;

    if (ticket.AlreadyUploaded) {
        cb(undefined, ticket.BlobLinkString);
        return;
    }

    var p = url.parse(ticket.UploadUrl);
    var options = {
        hostname: p.hostname,
        port: p.port,
        path: p.path,
        method: 'PUT',
        headers: ticket.UploadHeaders,
        withCredentials: false,
        responseType: 'arraybuffer',
		protocol:p.protocol,
    };
    if (!options.port) options.port = p.protocol == "https:" ? 443 : 80;
    options.headers['Content-Length'] = data.length;

    var invoker = p.protocol == "https:" ? https : http;
    var req = invoker.request(options, this._gotUploadResponse.bind(this, ticket, cb));
    req.on('error', function (e) { cb(e); });
    req.end(data);
}

// DEPRECATED, see client.blob
Client.prototype._gotUploadResponse = function (uploadTicket, cb, resp) {
    if (resp.statusCode != 200) {
        cb(resp.statusCode);
        return;
    }
    var req = new proto.LDVerifyUploadCompletedRequest();
    req.BlobUploadTicket = uploadTicket;
    this.msgCall(req, this._gotBlobLinkString.bind(this, cb));

}

// DEPRECATED, see client.blob
Client.prototype._gotBlobLinkString = function (cb, e, resp) {
    if (e) {
        cb(e);
        return;
    }
    cb(undefined, resp);
}

// DEPRECATED, see client.blob
Client.prototype.getDownloadLink = function(blobLinkString, cb) {
    var req = new proto.LDGetDownloadTicketRequest();
    req.BlobLinkString = blobLinkString;

    this.msgCall(req, this._gotDownloadTicket.bind(this, cb));
}

// DEPRECATED, see client.blob
Client.prototype._gotDownloadTicket = function (cb, e, resp) {
    if (e) {
        cb(e);
        return;
    }
	if(resp.BlobDownloadTicket.Headers) {
		this._doDownload(this._gotDownload.bind(this, cb), undefined, resp);
	} else {
		cb(undefined, resp.BlobDownloadTicket.Url);
	}
}

// DEPRECATED, see client.blob
Client.prototype._gotDownload = function (cb, e, resp) {
    if (e) {
        cb(e);
        return;
    }
	var uri = "data:application/octet-stream;base64," + resp.toString('base64');
    cb(undefined, uri);
}

// DEPRECATED, see client.blob
Client.prototype.download = function(blobLinkString, cb) {
    var req = new proto.LDGetDownloadTicketRequest();
    req.BlobLinkString = blobLinkString;

    this.msgCall(req, this._doDownload.bind(this, cb));
}

// DEPRECATED, see client.blob
Client.prototype._doDownload = function(cb, e, resp) {
    if (e) {
        cb(e);
        return;
    }

    var p = url.parse(resp.BlobDownloadTicket.Url);
    var options = {
        hostname: p.hostname,
        port: p.port,
        path: p.path,
        headers: resp.BlobDownloadTicket.Headers,
        method: 'GET',
        withCredentials: false,
        responseType: 'arraybuffer'
    };

    if (!options.port) options.port = p.protocol == "https:" ? 443 : 80;
    var invoker = p.protocol == "https:" ? https : http;
    var req = invoker.request(options, this._gotDownloadResponse.bind(this, cb));
    req.on('error', function (e) { cb(e); });
    req.end();
}

// DEPRECATED, see client.blob
Client.prototype._gotDownloadResponse = function (cb, resp) {
    if (resp.statusCode != 200) {
        cb(resp.statusCode ? resp.statusCode : "BrowserBlocked");
        return;
    }
    var bufs = [];
    resp.on('data', function(d) {
        if (d.constructor == Uint8Array)
            d = new Buffer(d);
        bufs.push(d);
    });
    resp.on('end', function() {
        cb(undefined, Buffer.concat(bufs));
    });
}

//for test
// DEPRECATED, please use this.auth.connectEmail
Client.prototype.emailSignin = function (address) {
    var identity = new proto.LDIdentity();
    identity.Principal = address;
    identity.Type = proto.LDIdentityType.Email;

    var register = new proto.LDRegisterWithTokenRequest();
    register.Identity = identity;
    register.Locale = "en_US";

    this.idpCall(register, function() {});
}

//for test
// DEPRECATED, please use this.auth.connectPhone
Client.prototype.phoneSignin = function (phone) {
    var identity = new proto.LDIdentity();
    identity.Principal = phone;
    identity.Type = proto.LDIdentityType.Phone;

    var register = new proto.LDRegisterWithTokenRequest();
    register.Identity = identity;
    register.Locale = "en_US";

    this.idpCall(register, function() {});
}

if(typeof window !== "undefined") {
    Client.prototype.enableWindowAccess = function() {
        var client = this;
        var handler = function(event) {
            if(event.origin != document.location.origin) {
                event.source.postMessage({ Error:"BadOrigin", Id:event.data.Id}, event.origin);
                return;
            }
            if(!client._enabled) {
                event.source.postMessage({ Error:"ConnectionNotEnabled", Id:event.data.Id}, event.origin);
                return;
            }
            var req = event.data;
            if(!("Type" in req)) {
                event.source.postMessage({ Error:"MissingType", Id:event.data.Id}, event.origin);
                return;
            }
            if(req.Type == "MsgCall") {
                if(!("Class" in req) || !("Body" in req) || !("Id" in req)) {
                    event.source.postMessage({ Error:"MissingRequestFields", Id:event.data.Id }, event.origin);
                    return;
                }

                var cls = req.Class;
                if(!(cls in om.proto)) {
                    event.source.postMessage({ Error:"UnknownRequestType", Id:event.data.Id }, event.origin);
                    return;
                }
                cls = om.proto[cls];
                var msg_req = new cls(req.Body);
                client.msgCall(msg_req, function(e, msg_resp) {
                    var resp = { Id:req.Id, Type:"MsgResponse"};
                    if(e) {
                        resp.Error = e.toString();
                    } else {
                        resp.Class = msg_resp.constructor.name;
                        resp.Body = msg_resp.encode();
                    }
                    event.source.postMessage(resp, event.origin);
                });
                return;
            } else {
                event.source.postMessage({ Error:"UnknownType", Id:event.data.Id }, event.origin);
                return;
            }
        }
        window.addEventListener('message', handler, false);
    }
    Client.prototype.enableFromWindow = function(w) {
        var client = this;
        this._nextWindowRequest = 1;
        this._pendingWindowRequest = {};
        var handler = function(event) {
            try {
                if(event.origin != document.location.origin) {
                    console.log({ Error:"BadOrigin", Id:event.data.Id});
                    return;
                }

                var resp = event.data;

                if(!("Id" in resp)) {
                    console.log("Missing response id", resp)
                    return;
                }


                var cb = client._pendingWindowRequest[event.data.Id];
                if(!cb)
                    cb = console.log;

                if("Error" in resp) {
                    cb(new Error(resp.Error));
                    return;
                }

                if(!("Type" in resp)) {
                    console.log({ Error:"MissingResponseType", Id:event.data.Id});
                    return;
                }
                if(resp.Type == "MsgResponse") {
                    if(!("Class" in resp) || !("Body" in resp)) {
                        console.log({ Error:"MissingResponseFields", Id:event.data.Id });
                        return;
                    }

                    var cls = resp.Class;
                    if(!(cls in om.proto)) {
                        console.log({ Error:"UnknownResponseType", Id:event.data.Id });
                        return;
                    }
                    cls = om.proto[cls];
                    var msg_resp = new cls(resp.Body);
                    cb(undefined, msg_resp);
                    return;
                } else {
                    console.log("Unknown TYPE!!!", resp);
                    return;
                }
            } catch(e) {
                console.log("Fatal marshalling", e);
            }
        };
        window.addEventListener('message', handler, false);
        this.msgCall = function(req, cb) {
            var id = this._nextWindowRequest++;
            this._pendingWindowRequest[id] = cb;
            var req = { Id:id, Class:req.constructor.name, Body:req.encode(), Type:"MsgCall" };
            w.postMessage(req, document.location.origin);
        };
    }
}


module.exports = {
	DefaultConfiguration:TEST_KEYS,
	LocalConfiguration:LOCAL_TEST_KEYS,
    DevConfiguration:DEV_KEYS,
    Client: Client,
    Connection: connection.Connection,
    PermanentFailure: connection.PermanentFailure,
    TemporaryFailure: connection.TemporaryFailure
};
Object.freeze(module.exports);
