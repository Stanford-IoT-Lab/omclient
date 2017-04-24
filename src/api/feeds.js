class FeedsApi {

	constructor(client) {
		this._ldClient = client;
	}

	createFeed(kind, cb) {
		var feedKind = kind;
		var callback = cb;
		if (arguments.length == 1 && typeof arguments[0] == 'function') {
			callback = arguments[0];
			feedKind = null;
		}
		this._ldClient.feed._createFeed(feedKind, callback);
	}

	addAccountsToFeed(feed, accounts, cb) {
		this._ldClient.feed.addFeedMembers(feed, accounts, cb);
	}

	getOrCreateFeedWithAccounts(accounts, kind, cb) {
		var feedKind = kind;
		var callback = cb;
		if (arguments.length == 2 && typeof arguments[1] == 'function') {
			callback = arguments[1];
			feedKind = null;
		}
		this._ldClient.feed.getOrCreateFeedWithMembers(accounts, callback, feedKind);
	}
}

module.exports = FeedsApi;