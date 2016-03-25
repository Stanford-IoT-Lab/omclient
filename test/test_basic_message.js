var assert = require('assert')
var omlib;
if (typeof window === 'undefined') {
    omlib = require('../lib/omlib');
} else {
    omlib = require('omlib');
}

var ourcrypto = require('../lib/crypto');

function abort(cause) {
    console.log("aborting because connection was severed");
    throw cause;
}

omlib.init();
var client = omlib._ldClient;
assert.ok(client.account);
client.onInterrupted = abort;

var push_received = 0;
function onpush(push) {
    console.log(push);
    ++push_received;
}

client._msg.onPush = onpush;

client.enable();

function subscribe() {
    client.msgCall(new omlib._proto.LDSubscribeForAccountInboxRequest(), onsubscribe);
}
function onsubscribe(error, resp, req) {
    assert.ifError(error);
    console.log("subscribed");
    createfeed();
}

var test_feed = null;
function createfeed() {
    test_feed = new omlib._proto.LDFeed();
    test_feed.Account = client.account;
    test_feed.Key = ourcrypto.createNonce();
    var req = new omlib._proto.LDCreateFeedRequest();
    req.Feed = test_feed;
    client.msgCall(req, oncreatedfeed);
}

function oncreatedfeed(error, resp, req) {
    assert.ifError(error);
    console.log("created");
    sendmessage();
}

function sendmessage() {
    var req = new omlib._proto.LDOverwriteMessageRequest();
    req.Feed = test_feed;
    req.AnyMemberWritable = false;
    req.Body = ourcrypto.createNonce();
    req.Id = new omlib._proto.LDTypedId();
    req.Id.Type = "test";
    req.Id.Id = new Buffer("123");
    req.Version = 0;
    client.msgCall(req, onsentmessage);
}

function onsentmessage(error, resp, req) {
    assert.ifError(error);
    console.log("sent");
    sendfailmessage();
}

function sendfailmessage() {
    var req = new omlib._proto.LDAddMessageRequest();
    req.Feed = test_feed;
    req.AnyMemberWritable = false;
    req.Body = new Buffer("bar");
    req.Id = new omlib._proto.LDTypedId();
    req.Id.Type = "test";
    req.Id.Id = new Buffer("123");
    req.Version = 0;
    client.msgCall(req, onsentfailmessage);
}

function onsentfailmessage(error, resp, req) {
    assert.ok(error);
    assert.equal(client.PermanentFailure, error.constructor);
    assert.equal("MessageAlreadyExists", error.error);
    console.log("sent reject :)");
    assert.equal(2, push_received);
    client.onInterrupted = null;
    client.disable();
    process.exit();
}

//start test
subscribe();