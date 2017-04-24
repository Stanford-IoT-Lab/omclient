var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

var LDSubscribeForAccountInboxRequest = require('../src/longdan/ldproto/LDSubscribeForAccountInboxRequest');
var LDRegisterWithTokenRequest = require('../src/longdan/ldproto/LDRegisterWithTokenRequest');
var LDIdentity = require('../src/longdan/ldproto/LDIdentity');
var LDIdentityType = require('../src/longdan/ldproto/LDIdentityType');

function abort(cause) {
    console.log("aborting because connection was severed");
    throw cause;
}

omlib.init();
var client = omlib._ldClient;
//var client = new om.client.Client({reset:true});
client.onInterrupted = abort;

function subscribe() {
    client.msgCall(new LDSubscribeForAccountInboxRequest(), onsubscribe);
}
function onsubscribe(error, resp, req) {
    assert.ifError(error);
    console.log("account works on message server " + omlib.auth.getAccount());
    client.disable();
    process.exit();
}
client.onSignedUp = subscribe;

var identity = new LDIdentity();
identity.Principal = "tj+ch@mobisocial.us";
identity.Type = LDIdentityType.Email;

var register = new LDRegisterWithTokenRequest();
register.Identity = identity;
register.Locale = "en_US";
register.RequestedCluster = "TWO";

function onregister(error, resp) {
    assert.ifError(error);
}
console.log("enqueued confirm");
client.idpCall(register, onregister);
client.enable();
