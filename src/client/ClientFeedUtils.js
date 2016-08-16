var crypto = require("../util/crypto");

var OMFeed = require('./model/OMFeed');
var ObjTypes = require("./model/ObjTypes");
var LDCreateFeedRequest = require('../longdan/ldproto/LDCreateFeedRequest');
var LDFeed = require('../longdan/ldproto/LDFeed');
var LDAddMemberRequest = require('../longdan/ldproto/LDAddMemberRequest');
var LDAddPendingInvitationRequest = require('../longdan/ldproto/LDAddPendingInvitationRequest');
var LDIdentityHash = require('../longdan/ldproto/LDIdentityHash');
var LDJoinPublicChatRequest = require('../longdan/ldproto/LDJoinPublicChatRequest');
var LDLeavePublicChatRequest = require('../longdan/ldproto/LDLeavePublicChatRequest');
var LDGetPublicChatRequest = require('../longdan/ldproto/LDGetPublicChatRequest');
var LDListGeneralPublicChatsRequest = require('../longdan/ldproto/LDListGeneralPublicChatsRequest');
var LDListCommunityDefinedChatsRequest = require('../longdan/ldproto/LDListCommunityDefinedChatsRequest');
var LDListLocalChatsRequest = require('../longdan/ldproto/LDListLocalChatsRequest');
var LDListInterestingChatsRequest = require('../longdan/ldproto/LDListInterestingChatsRequest');
var LDGetRecentMessagesRequest = require('../longdan/ldproto/LDGetRecentMessagesRequest');
var LDCommunityId = require('../longdan/ldproto/LDCommunityId');


class FeedUtils {

	constructor(client) {
		this._client = client;
		this._activeFeeds = {};
		this._publicChatSubscriptions = {};
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

	markFeedActive(feed) {
		var feedId = this._client.store.getObjectId(feed);
		this._activeFeeds[feedId] = true;
		if (this._supportsReadReceipts(feed)) {
			this.markFeedRead(feed);
		}

		if (feed.kind == OMFeed.KIND_PUBLIC) {
			this.joinPublicChat(feed);
		}
	}

	markFeedInactive(feed) {
		var feedId = this._client.store.getObjectId(feed);
		delete this._activeFeeds[feedId];
	}

	isFeedActive(feed) {
		var feedId = this._client.store.getObjectId(feed);
		return this._activeFeeds[feedId] === true;
	}

	markFeedRead(feed) {
		if (!this._supportsReadReceipts(feed)) {
			return;
		}
		var feedId = this._client.store.getObjectId(feed);
		this._client.store.getFeeds((feedsDb) => {
			feedsDb.getObjectById(feedId, (feed) => {
				var t = feed.renderableTime;
				if (feed.lastReadTime < t) {
					feed.lastReadTime = t;
					feed.numUnread = 0;
					feedsDb.update(feed);

					var type = ObjTypes.LAST_READ;
					var body = {
						lastReadTime: t
					};
					this._client.messaging._sendObjToFeed(feed, type, body);
				}
			});
		});
	}

	_supportsReadReceipts(feed) {
		return OMFeed.KIND_PUBLIC != feed.kind;
	}

	getPublicChat(name, stripe) {
		return new Promise((resolve, reject) => {
			var req = new LDGetPublicChatRequest();
			req.LobbyName = name;
			req.Stripe = stripe;
			this._client.msgCall(req, (err, resp, req) => {
				if (err) {
					reject(err);
				} else {
					var ldFeed = resp.Feed;
					this._client.store.getFeeds((feedDb) => {
						this._ensureFeed(feedDb, JSON.stringify(ldFeed.encode()), (feed) => {
							resolve(feed);
						});
					});
				}
			});
		});
	}

	joinPublicChat(feed) {
		return new Promise((resolve, reject) => {
			var feedId = this._client.store.getObjectId(feed);
			if (this._publicChatSubscriptions[feedId] == null) {
				var pcs = new PublicChatSubscriber(this._client, feed);
				this._client._msg.incrementInterest();
				var rm = this._client._msg.addSessionListener(pcs);
				this._publicChatSubscriptions[feedId] = rm;
			}
			resolve();
		});
	}

	leavePublicChat(feed) {
		var feedId = this._client.store.getObjectId(feed);
		var rm = this._publicChatSubscriptions[feedId];
		if (rm != null) {
			rm();
			this._client._msg.decrementInterest();
			delete this._publicChatSubscriptions[feedId];
		}
	}

	getRecentMessages(feed) {
		return new Promise((resolve, reject) => {
			var req = new LDGetRecentMessagesRequest();
			req.Feed = feed;

			this._client.msgCall(req, (err, resp, req) => {
				if (err) {
					reject(err);
				} else {
					this._client.longdanMessageProcessor.processDurableMessages(resp.Messages);
					resolve(resp);
				}
			});
		});
	}

	listInterstingChats(packageName, longtitude, latitude) {
		return new Promise((resolve, reject) => {
			var req = new LDListInterestingChatsRequest();
			req.PackageId = packageName;
			req.Lontitude = longtitude;
			req.Latitude = latitude;
			this._client.msgCall(req, (err, resp, req) => {
				if (err) {
					reject(err);
				} else {
					var all = [];
					var result = [];
					resp.Chats.forEach((chat, i) => {
						all.push(new Promise((res, rej) => {
							var ldFeed = chat.Feed;
							this._client.store.getFeeds((feedDb) => {
								this._ensureFeed(feedDb, JSON.stringify(ldFeed.encode()), (feed) => {
									result.push({
										feed,
										feedId: this._client.store.getObjectId(feed),
										chat,
									});
									res();
								});
							});
						}));
					});
					Promise.all(all).then(() => {
						resolve(result);
					});
				}
			});
		});
	}
}

class PublicChatSubscriber {

	constructor(client, feed) {
		this._client = client;
		this.feed = feed;
		this.connected = false;
	}

	onSessionEstablished(conn) {
		var displayName;
		if (this._client.account) {
			displayName = "myUniqueOmletId";
		} else {
			displayName = "Anonymous";
		}

		var req = new LDJoinPublicChatRequest();
		req.Feed = this._client.feed.getLDFeed(this.feed);
		req.DisplayName = displayName;
		this._client.msgCall(req, (err, resp, req) => {
			this.connected = (err == undefined);
			this.notifyFeedJoinStatus(this.connected);
		});
	}

	onSessionDisconnected(conn) {
		if (this.connected) {
			this.connected = false;
			this.notifyFeedJoinStatus(this.connected);
		}
	}

	notifyFeedJoinStatus(joined) {
		// TODO: look up feed realtime callback and notify
	}
}

module.exports = FeedUtils;
