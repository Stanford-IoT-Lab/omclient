var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

function abort(cause) {
    console.log("aborting because connection was severed");
    throw cause;
}

omlib.init();
var client = omlib._ldClient;
//var client = new om.client.Client({reset:true});
client.onInterrupted = abort;

function subscribe() {
    client.msgCall(new omlib._proto.LDSubscribeForAccountInboxRequest(), onsubscribe);
}
function onsubscribe(error, resp, req) {
    assert.ifError(error);
    console.log("account works on message server " + omlib.auth.getAccount());
    client.disable();
    process.exit();
}
client.onSignedUp = subscribe;

var identity = new omlib._proto.LDIdentity();
identity.Principal = "tj+ch@mobisocial.us";
identity.Type = omlib._proto.LDIdentityType.Email;

var register = new omlib._proto.LDRegisterWithTokenRequest();
register.Identity = identity;
register.Locale = "en_US";
register.RequestedCluster = "TWO";

function onregister(error, resp) {
    assert.ifError(error);
}
console.log("enqueued confirm");
client.idpCall(register, onregister);
client.enable();
