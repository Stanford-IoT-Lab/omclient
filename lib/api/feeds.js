var FeedsApi = function(client) {
	this._ldClient = client;
}

FeedsApi.createFeed = function(kind, cb) {
	var feedKind = kind;
	var callback = cb;
	if (arguments.length == 1 && typeof arguments[0] == 'function') {
		callback = arguments[0];
		feedKind = null;
	}
	this._ldClient.feed._createFeed(feedKind, callback);
}

FeedsApi.addAccountsToFeed = function(feed, accounts, cb) {
	this._ldClient.feed.addFeedMembers(feed, accounts, cb);
}

FeedsApi.getOrCreateFeedWithAccounts = function(accounts, kind, cb) {
	var feedKind = kind;
	var callback = cb;
	if (arguments.length == 2 && typeof arguments[1] == 'function') {
		callback = arguments[1];
		feedKind = null;
	}
	this._ldClient.feed.getOrCreateFeedWithMembers(accounts, callback, feedKind);
}

module.exports = FeedsApi;