var assert = require('assert')
var Omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

var omlib = new Omlib({
	history: "none"
});

omlib.connect();

// or, omlib.init(config); omlib.connect();