var assert = require('assert')
var omlib;
if (typeof window === 'undefined') {
    omlib = require('../lib/omlib');
} else {
    omlib = require('omlib');
}

omlib.init();
var client = omlib._ldClient;
var remove1 = false;
var remove2 = false;
var remove3 = false;

var pongCount = 0;
var pangCount = 0;

function register() {
  remove1 = client.events.register("ping", ponged);
  remove2 = client.events.register("ping", panged);
  remove3 = client.events.register("pang", panged);
}

function ping () {
    client.events._notify("ping");
}

function pang () {
    client.events._notify("pang");
}

function ponged() {
    pongCount++;
    console.log("PONG!");
}

function panged() {
    pangCount++;
    console.log("PANG!");
}

register();
ping();
remove1();
ping();
remove2();
ping();
ping();
pang();

assert.equal(pongCount, 1);
assert.equal(pangCount, 3);