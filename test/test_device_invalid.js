var assert = require('assert')
var omlib;
if (typeof window === 'undefined') {
    omlib = require('../lib/omlib');
} else {
    omlib = require('omlib');
}

function abort(cause) {
    console.log("aborting because connection was severed");
    throw cause;
}

omlib.init();
var client = omlib._ldClient;

var validated = null;
function deviceNotFound() {
    console.log("good device not found");
    clearTimeout(validated);
    // TODO
    //var nc = new om.client.Client();
    //assert.notEqual(nc.publicKey, client.publicKey);
}

assert.ok(client.account);
client.onInterrupted = abort;
client.onDeviceInvalid = deviceNotFound;

var push_received = 0;
function onpush(push) {
    console.log(push);
    ++push_received;
}

client.onPush = onpush;

client.enable();

function deleteDevice() {
    var req = new omlib._proto.LDDeleteDeviceRequest();
    req.PublicKey = client.publicKey;
    client.msgCall(req, onDeleteDevice)
}
function onDeleteDevice(error, resp, req) {
    assert.ifError(error);
    console.log("deleted");
    client.onInterrupted = null;
    client.disable();
    setTimeout(subscribe, 100);
}


function subscribe() {
    validated = setTimeout(function () {
        assert.fail("should have been cancelled");
    }, 3000);
    client.enable();
    client.msgCall(new omlib._proto.LDSubscribeAccountRequest(), onsubscribe);
}
function onsubscribe(error, resp, req) {
    assert.ok(error);
    console.log("good, couldn't access");
}
deleteDevice();