var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

function abort(cause) {
    console.log("aborting because connection was severed");
    throw cause;
}

omlib.init();
var client = omlib._ldClient;
assert.ok(client.account);
client.onInterrupted = abort;

var data = om.createNonce(128);
console.log(data);

var count = 0;
function uploaded(e, blobLinkString) {
    assert.ifError(e);
    assert.ok(blobLinkString);
    ++count;
    if (count <= 1)
        upload();
    else
        download(blobLinkString);
}

function upload() {
    client.uploadBlob(data, "application/octet-stream", uploaded);
}

function download(blobLinkString) {
    client.download(blobLinkString, downloaded);
}
function downloaded(e, b) {
    assert.ifError(e);
    console.log(b);
    assert.equal(b.toString('base64'), data.toString('base64'));
    client.disable();
}

client.enable();
upload();

