var readline = require('readline');
var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

function connectToFeed(feed) {
	var rl = readline.createInterface({
  	  input: process.stdin,
	  output: process.stdout
	});

	rl.on('line', (cmd) => {
	  	var body = { text : cmd };
		omlib._ldClient.messaging._sendObjToFeedImmediate(feed, "text", body);
	});

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