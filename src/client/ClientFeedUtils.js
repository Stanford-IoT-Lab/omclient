var crypto = require("../util/crypto");

var LDCreateFeedRequest = require('../longdan/ldproto/LDCreateFeedRequest');
var LDFeed = require('../longdan/ldproto/LDFeed');
var LDAddMemberRequest = require('../longdan/ldproto/LDAddMemberRequest');
var LDAddPendingInvitationRequest = require('../longdan/ldproto/LDAddPendingInvitationRequest');
var LDIdentityHash = require('../longdan/ldproto/LDIdentityHash');

class FeedUtils {

	constructor(client) {
		this._client = client;
	}

	_createFeed(feedKind, cb) {
		var req = new LDCreateFeedRequest();
		req.Feed = new LDFeed();
		req.Feed.Kind = feedKind;
		req.Feed.Account = this._client.account;
		req.Feed.Key = crypto.pseudoRandomBytes(32);
		this._client.msgCall(req, (err, resp, req) => {
			if (err) {
				cb(err);
			} else {
				this._client.store.getFeeds((feedDb) => {
					this._ensureFeed(feedDb, JSON.stringify(req.Feed.encode()), (feed) => cb(undefined, feed));
				});
			}
		});
	}

	createFeed(cb) {
		this._createFeed(null, cb);
	}

	// callback params:
	// (err, feed, existing)
	getOrCreateFeedWithMembers(members, cb, kind) {
		var feedKind = kind;
		var accounts = [];
		var identityHashes = [];

		var keepOnKeepingOn = true;
		members.forEach((member) => {
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

		this._client.identity.getAccountsForIdentityHashes(identityHashes, (matchedAccounts, identityHashes) => {
			matchedAccounts.forEach((account) => {
				if (accountsToAdd.indexOf(account) == -1) {
					accountsToAdd.push(account);
				}
			});

			this._client.identity.getAccountsForIdentifiers(accounts, (accountsToAdd, misses) => {
				if (misses.length != 0) {
					cb("Unmatched accounts");
					return;
				}

				var accountIds = accountsToAdd.map(
						(a) => this._client.store.getObjectId(a)
					).filter((item, pos, self) => self.indexOf(item) == pos);

				this._client.store.getFeeds((feedsDb) => {
					var matched = undefined;
					var feeds = feedsDb.query();
					feeds.forEach((feed) => {
						if (feed.members.length != accountIds.length || feed.invitations.length != identityHashes.length) {
							return;
						}
						var ldFeed = this.getLDFeed(feed);
						if (ldFeed.Kind != feedKind) {
							return false;
						}

						var candidate = true;

						accountIds.forEach((account) => {
							if (feed.members.indexOf(account) == -1) {
								candidate = false;
								return false;
							}
						});

						identityHashes.forEach((identity) => {
							if (feed.invitations.indexOf(identity) == -1) {
								candidate = false;
								return false;
							}
						});

						if (candidate) {
							if (matched) {
								if (feed.renderableTime > matched.renderableTime) {
									matched = feed;
								}
							} else {
								matched = feed;
							}
						}
					});

					if (matched) {
						cb(undefined, matched, true);
					} else {
						this._createFeedWithMembers(feedKind, accountsToAdd, identityHashes, cb);
					}
				});
			});
		});
	}

	_createFeedWithMembers(feedKind, accounts, identityHashes, cb) {
		this._createFeed((feedKind, err, feed) => {
			if (err) {
				if (typeof cb == 'function')
					cb(err);
				return;
			}
			this.addFeedMembers(feed, accounts, (err) => {
				if (err) {
					if (typeof cb == 'function')
						cb(err);
					return;
				}
				this._inviteIdentitiesToFeed(feed, identityHashes, (err) => {
					if (err) {
						if (typeof cb == 'function')
							cb(err);
						return;
					} else {
						if (typeof cb == 'function')
							cb(undefined, feed, false);
					}
				});
			});
		});
	}

	addFeedMembers(feed, accounts, cb) {
		if (accounts.length == 0) {
			if (typeof cb == 'function')
				cb(undefined);
		} else {
			var ldFeed = this.getLDFeed(feed);
			var account = accounts.shift();
			var req = new LDAddMemberRequest();
			req.Feed = ldFeed;
			req.Member = account.account;
			this._client.msgCall(req, (err, resp, req) => {
				if (err) {
					if (typeof cb == 'function')
						cb(err);
				} else {
					this.addFeedMembers(feed, accounts, cb);
				}
			});
		}
	}

	_inviteIdentitiesToFeed(feed, identityHashes, cb) {
		if (identityHashes.length == 0) {
			if (typeof cb == 'function')
				cb(undefined);
		} else {
			var ldFeed = this.getLDFeed(feed);
			var identity = identityHashes.shift();
			var req = new LDAddPendingInvitationRequest();
			req.Feed = ldFeed;
			req.IdentityHash = new LDIdentityHash(JSON.parse(identity));
			this._client.msgCall(req, (err, resp, req) => {
				if (err) {
					if (typeof cb == 'function')
						cb(err);
				} else {
					this._inviteIdentitiesToFeed(ldFeed, identityHashes, cb);
				}
			});
		}
	}

	getLDFeed(feed) {
		return new LDFeed(JSON.parse(feed.identifier));
	}

	_ensureFeed(feedsDb, identifier, cb) {
		var ld = new LDFeed(JSON.parse(identifier));
		var details = {
			kind: ld.Kind
		};

		var cb2 = (f, existing) => {
	        if (!existing) {
	            this._client.longdanMessageConsumer._enqueueFeedForFetch(identifier);
	        }
	        if (typeof(cb) == 'function') {
	            cb(f, existing);
	        }
	    }

		feedsDb.getOrCreateObject(identifier, cb2, details);
	}

	_ensureFeedMember(feed, member) {
		var addMember = (member) => {
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
				this._client.store.getFeeds((feeds) => {
					feeds.update(feed);
				});

				member.feeds.push(feedId);
				this._client.store.getAccounts((accounts) => {
					accounts.update(member, (member) => {
						this._generateFeedName(feedId);
					});
				});
			}
		};

		if (typeof(member) == 'string') {
			this._client.store.getAccounts((accounts) => {
				accounts.getOrCreateObject(member, addMember);
			});
		} else {
			addMember(member);
		}
	}

	_generateFeedName(feedId) {
		this._client.store.getFeeds((feedsDb) => {
			feedsDb.getObjectById(feedId, (feed) => {
				if (!feed.specifiedName) {
					this._client.store.getAccounts((accounts) => {
						var query = {};
						query[accounts._id] = { $in: feed.members };
						var members = accounts.query(query);
						members.toArray((members) => {
							members = members
								.filter((a) => !a.owned)
								.map((a) => !a.name ? "Someone" : a.name);
							feed.name = members.join(", ");
							feedsDb.update(feed);
						});
					});
				}
			});
		});
	}
}

module.exports = FeedUtils;