var proto = require("../longdan/ldproto");
var crypto = require("crypto");

function FeedUtils(client) {
	this._client = client;
}

FeedUtils.prototype._createFeed = function(feedKind, cb) {
	var req = new proto.LDCreateFeedRequest();
	req.Feed = new proto.LDFeed();
	req.Feed.Kind = feedKind;
	req.Feed.Account = this._client.account;
	req.Feed.Key = crypto.pseudoRandomBytes(32);
	this._client.msgCall(req, function(err, resp, req) {
		if (err) {
			cb(err);
		} else {
			this._client.store.getFeeds(function(feedDb) {
				this._ensureFeed(feedDb, JSON.stringify(req.Feed.encode()), function(feed) {
					cb(undefined, feed);
				}.bind(this));
			}.bind(this));
		}
	}.bind(this));
}

FeedUtils.prototype.createFeed = function(cb) {
	this._createFeed(null, cb);
}

// callback params:
// (err, feed, existing)
FeedUtils.prototype.getOrCreateFeedWithMembers = function(members, cb, kind) {
	var feedKind = kind;
	var accounts = [];
	var identityHashes = [];

	var keepOnKeepingOn = true;
	members.forEach(function(member) {
		if (typeof member == 'string') {
			if (member.indexOf(':') == -1) {
				accounts.push(member);
			} else {
				// raw identity string
				var hashId = this._client.identity.parseRawIdentity(member).getEncodedHashedIdentity();
				identityHashes.push(hashId);
			}
		} else if (typeof member.account == 'string') {
			accounts.push(member.account);
		} else if (typeof member.getEncodedHashedIdentity == 'function') {
			identityHashes.push(member.getEncodedHashedIdentity());
		} else {
			cb("Unsupported identity type for " + member);
			keepOnKeepingOn = false;
			return false;
		}
	});

	if (!keepOnKeepingOn)
		return;

	var myAccount = this._client.account;
	if (!myAccount) {
		cb("No local account for feed creation");
		return;
	}

	if (accounts.indexOf(myAccount) == -1) {
		accounts.unshift(myAccount);
	}

	this._client.identity.getAccountsForIdentityHashes(identityHashes, function(matchedAccounts, identityHashes) {
		matchedAccounts.forEach(function(account) {
			if (accountsToAdd.indexOf(account) == -1) {
				accountsToAdd.push(account);
			}
		});

		this._client.identity.getAccountsForIdentifiers(accounts, function(accountsToAdd, misses) {
			if (misses.length != 0) {
				cb("Unmatched accounts");
				return;
			}

			var accountIds = accountsToAdd.map(function(a) {
				return this._client.store.getObjectId(a);
			}.bind(this)).filter(function(item, pos, self) {
				return self.indexOf(item) == pos;
			});

			this._client.store.getFeeds(function(feedsDb) {
				var matched = undefined;
				var feeds = feedsDb.query();
				feeds.forEach(function(feed) {
					if (feed.members.length != accountIds.length || feed.invitations.length != identityHashes.length) {
						return;
					}
					var ldFeed = this.getLDFeed(feed);
					if (ldFeed.Kind != feedKind) {
						return false;
					}

					var candidate = true;

					accountIds.forEach(function(account) {
						if (feed.members.indexOf(account) == -1) {
							candidate = false;
							return false;
						}
					}.bind(this));

					identityHashes.forEach(function(identity) {
						if (feed.invitations.indexOf(identity) == -1) {
							candidate = false;
							return false;
						}
					}.bind(this));

					if (candidate) {
						if (matched) {
							if (feed.renderableTime > matched.renderableTime) {
								matched = feed;
							}
						} else {
							matched = feed;
						}
					}
				}.bind(this));

				if (matched) {
					cb(undefined, matched, true);
				} else {
					this._createFeedWithMembers(feedKind, accountsToAdd, identityHashes, cb);
				}
			}.bind(this));
		}.bind(this));
	}.bind(this));
}

FeedUtils.prototype._createFeedWithMembers = function(feedKind, accounts, identityHashes, cb) {
	this._createFeed(function(feedKind, err, feed) {
		if (err) {
			if (typeof cb == 'function')
				cb(err);
			return;
		}
		this.addFeedMembers(feed, accounts, function(err) {
			if (err) {
				if (typeof cb == 'function')
					cb(err);
				return;
			}
			this._inviteIdentitiesToFeed(feed, identityHashes, function(err) {
				if (err) {
					if (typeof cb == 'function')
						cb(err);
					return;
				} else {
					if (typeof cb == 'function')
						cb(undefined, feed, false);
				}
			});
		}.bind(this));
	}.bind(this));
}

FeedUtils.prototype.addFeedMembers = function(feed, accounts, cb) {
	if (accounts.length == 0) {
		if (typeof cb == 'function')
			cb(undefined);
	} else {
		var ldFeed = this.getLDFeed(feed);
		var account = accounts.shift();
		var req = new proto.LDAddMemberRequest();
		req.Feed = ldFeed;
		req.Member = account.account;
		this._client.msgCall(req, function(err, resp, req) {
			if (err) {
				if (typeof cb == 'function')
					cb(err);
			} else {
				this.addFeedMembers(feed, accounts, cb);
			}
		}.bind(this));
	}
}

FeedUtils.prototype._inviteIdentitiesToFeed = function(feed, identityHashes, cb) {
	if (identityHashes.length == 0) {
		if (typeof cb == 'function')
			cb(undefined);
	} else {
		var ldFeed = this.getLDFeed(feed);
		var identity = identityHashes.shift();
		var req = new proto.LDAddPendingInvitationRequest();
		req.Feed = ldFeed;
		req.IdentityHash = new proto.LDIdentityHash(JSON.parse(identity));
		this._client.msgCall(req, function(err, resp, req) {
			if (err) {
				if (typeof cb == 'function')
					cb(err);
			} else {
				this._inviteIdentitiesToFeed(ldFeed, identityHashes, cb);
			}
		}.bind(this));
	}
}

FeedUtils.prototype.getLDFeed = function(feed) {
	return new proto.LDFeed(JSON.parse(feed.identifier));
}

FeedUtils.prototype._ensureFeed = function(feedsDb, identifier, cb) {
	var ld = new proto.LDFeed(JSON.parse(identifier));
	var details = {
		kind: ld.Kind
	};
	feedsDb.getOrCreateObject(identifier, cb, details);
}

FeedUtils.prototype._ensureFeedMember = function(feed, member) {
	var addMember = function(member) {
		var accountId = this._client.store.getObjectId(member);
		var feedId = this._client.store.getObjectId(feed);

		var needed = true;
		for (var i = 0; i < feed.members.length; i++) {
			if (feed.members[i] == accountId) {
				needed = false;
				break;
			}
		}
		if (needed) {
			feed.members.push(accountId)
			this._client.store.getFeeds(function(feeds) {
				feeds.update(feed);
			}.bind(this));

			member.feeds.push(feedId);
			this._client.store.getAccounts(function(accounts) {
				accounts.update(member, function(member) {
					this._generateFeedName(feedId);
				}.bind(this));
			}.bind(this));
		}
	}.bind(this);

	if (typeof(member) == 'string') {
		this._client.store.getAccounts(function(accounts) {
			accounts.getOrCreateObject(member, addMember);
		}.bind(this));
	} else {
		addMember(member);
	}
}

FeedUtils.prototype._generateFeedName = function(feedId) {
	this._client.store.getFeeds(function(feedsDb) {
		feedsDb.getObjectById(feedId, function(feed) {
			if (!feed.specifiedName) {
				this._client.store.getAccounts(function(accounts) {
					var query = {};
					query[accounts._id] = { $in: feed.members };
					var members = accounts.query(query);
					members.toArray(function(members) {
						members = members
							.filter(function(a) { return !a.owned; })
							.map(function(a) { return !a.name ? "Someone" : a.name; });
						feed.name = members.join(", ");
						feedsDb.update(feed);
					});
				}.bind(this));
			}
		}.bind(this));
	}.bind(this));
}

module.exports = FeedUtils;