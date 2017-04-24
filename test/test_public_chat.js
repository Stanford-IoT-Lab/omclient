var readline = require('readline');
var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

function onMessageReceived(msg) {
	//console.log(msg);
	if (!msg.Metadata || msg.Id.Type != "text") {
		return; // todo, compare feed
	}
	var body = JSON.parse(msg.Body);
	var meta = JSON.parse(msg.Metadata);
	console.log(meta.n + ": " + body.text);
}

function connectToFeed(feed) {
	var rl = readline.createInterface({
  	  input: process.stdin,
	  output: process.stdout
	});

	rl.on('line', (cmd) => {
		if (!cmd) return;
	  	var body = { text : cmd };
		omlib._ldClient.messaging._sendObjToFeedImmediate(feed, "text", body);
	});

	omlib._ldClient.events.registerMessagePushReceiver(onMessageReceived);
	omlib._ldClient.feed.markFeedActive(feed);
}

omlib.init({
    persist: false,
    history: "none"
});


omlib.connect();
omlib._ldClient.feed.getPublicChat("foo")
	.then((feed) => {
		connectToFeed(feed)
	}, (err) => {
		console.log("Error getting feed " + err);
	});