var LDGetSigninLinkRequest = require('../longdan/ldproto/LDGetSigninLinkRequest');
var LDGetAppSigninLinkRequest = require('../longdan/ldproto/LDGetAppSigninLinkRequest');
var LDRegisterWithTokenRequest = require('../longdan/ldproto/LDRegisterWithTokenRequest');
var LDIdentity = require('../longdan/ldproto/LDIdentity');
var LDIdentityType = require('../longdan/ldproto/LDIdentityType');
var LDConfirmTokenRequest = require('../longdan/ldproto/LDConfirmTokenRequest');
var LDRegisterWithOAuthRequest = require('../longdan/ldproto/LDRegisterWithOAuthRequest');
var LDConfirmSigninCodeRequest = require('../longdan/ldproto/LDConfirmSigninCodeRequest');
var LDConfirmAuthCodeRequest = require('../longdan/ldproto/LDConfirmAuthCodeRequest');
var LDDeleteDeviceRequest = require('../longdan/ldproto/LDDeleteDeviceRequest');

class AuthUtils {

	constructor(client) {
		this._client = client;
	}

	// Returns a URI to a web page for Omlet OAuth
	getAuthPage(redirectUrl, scopes, cb) {
		if (!scopes) {
			// OmletChat, OmletArcade
			//scopes = ["OmletChat"];
			scopes = ["PublicProfile"];
		}

		var req = new LDGetSigninLinkRequest();
		req.RedirectPage = redirectUrl;
		req.Scopes = scopes;

		this._client.idpCall(req, (e, resp) => {
			if (cb != undefined)
				cb(e, resp);
		});
	}

	// Returns a URI to a web page for Omlet OAuth
	getLegacyAuthPage(redirectUrl, scopes, cb) {
	  if (!scopes) {
	    // OmletChat, OmletArcade
	    //scopes = ["OmletChat"];
	    scopes = ["PublicProfile"];
	  }

	  var req = new LDGetAppSigninLinkRequest();
	  req.RedirectPage = redirectUrl;
	  req.Scopes = scopes;

	  this._client.idpCall(req, (e, resp) => {
	      if (cb != undefined)
	          cb(e, resp);
	  });
	}

	connectIdentity(identity) {
		var req = new DRegisterWithTokenRequest();
		req.Identity = identity;
		this._client.idpCall(req, function(e, resp) {});
	}

	connectEmail(email) {
		var identity = new LDIdentity();
		identity.Type = LDIdentityType.Email;
		identity.Principal = email;
		this.connectIdentity(identity);
	}

	connectPhone(phone) {
		var identity = new LDIdentity();
		identity.Type = LDIdentityType.Phone;
		identity.Principal = phone;
		this.connectIdentity(identity);
	}

	confirmPinForIdentity(ldIdentity, pin, callback) {
		var req = new LDConfirmTokenRequest();
		req.Identity = ldIdentity;
		req.Token = pin;
		this._client.idpCall(req, callback);
	}

	connectOAuth(serviceType, token) {
		var req = new LDRegisterWithOAuthRequest();
		req.ServiceType = serviceType;
		req.Key = token;
		this._client.idpCall(req, this._onAuthenticationComplete.bind(this));
	}

	confirmAuth(code, queryKey) {
		var req = new LDConfirmSigninCodeRequest();
		req.AuthCode = code;
		req.QueryKey = queryKey;

		this._client.idpCall(req, this._onAuthenticationComplete.bind(this));
	}

	confirmLegacyAuth(code, queryKey){
	  var req = new LDConfirmAuthCodeRequest();
	  req.AuthCode = code;
	  req.QueryKey = queryKey;

	  this._client.idpCall(req, this._onAuthenticationComplete.bind(this));
	}

	_onAuthenticationComplete(e, resp) {
		if (e) {
			console.error('authentication error: ' + e);
		} else {
			var details = resp.AccountDetails;
			this._client._saveDetails(details);
			this._client._msg._setCluster(details.Cluster, "/device");
			this._client._idp.onInterrupted = null;
			this._client._idp.disable();
			this._client._msg.enable();
			if (this._client.onSignedUp)
				this._client.onSignedUp();
		}
	}

	logout(cb) {
		var req = new LDDeleteDeviceRequest();
		req.PublicKey = this._client.publicKey;
		this._client.msgCall(req, (err) => {
			if (err) {
				cb(err);
			} else {
				this._client.erasePrivateKey();
				this._client.resetConnections();
				this._client.store.clearData(function(err) {
					if (typeof cb === 'function') {
						cb(err);
					}
				});
			}
		});
	}
}

module.exports = AuthUtils;
