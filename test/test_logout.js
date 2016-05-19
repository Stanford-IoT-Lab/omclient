var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

omlib.init();

omlib.auth.logout(function(err) {
	if (err) {
		console.log("Logout failed! " + err);
	} else {
		console.log("Logout complete.");
	}
	process.exit();
});
