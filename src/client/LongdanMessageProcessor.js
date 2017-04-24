var async = require('async');
var ObjTypes = require("./model/ObjTypes");
var ChatObjectProcessor = require("./processors/ChatObjectProcessor");
var FeedDetailsProcessor = require("./processors/FeedDetailsProcessor");
var MembershipProcessor = require("./processors/MembershipProcessor");
var BlobRefProcessor = require("./processors/BlobRefProcessor");
var ContactProcessor = require("./processors/ContactProcessor");
var LikeProcessor = require("./processors/LikeProcessor");
var LastReadProcessor = require("./processors/LastReadProcessor");
var FeedInvitationProcessor = require('./processors/FeedInvitationProcessor');
var NoopProcessor = require('./processors/NoopProcessor');

class LongdanMessageProcessor {

	constructor(client, options) {
		this._client = client;
		options = options || {};

		var noop = new NoopProcessor();

		if (options.chatObjectProcessor)
		    var cop = options.chatObjectProcessor;
		else
		    var cop = new ChatObjectProcessor();
		if (!options.enabledProcessors) {
		    options.enabledProcessors = [ObjTypes.TEXT, ObjTypes.ANIMATED_GIF, ObjTypes.PICTURE, ObjTypes.CANVAS,
		                                 ObjTypes.STICKER, ObjTypes.ILBC, ObjTypes.RDL, ObjTypes.RDL,
		                                 ObjTypes.LOCATION, ObjTypes.FILE, ObjTypes.VIDEO, ObjTypes.COMMENT,
		                                 ObjTypes.LIKE];
		}
		this._chatObjectProcessor = cop;

		this._durableMessageProcessors = {};

		if (options.enabledProcessors.indexOf(ObjTypes.TEXT) >= 0)
		    this._durableMessageProcessors[ObjTypes.TEXT] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.ANIMATED_GIF) >= 0)
		    this._durableMessageProcessors[ObjTypes.ANIMATED_GIF] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.PICTURE) >= 0)
		    this._durableMessageProcessors[ObjTypes.PICTURE] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.CANVAS) >= 0)
		    this._durableMessageProcessors[ObjTypes.CANVAS] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.STICKER) >= 0)
		    this._durableMessageProcessors[ObjTypes.STICKER] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.ILBC) >= 0)
		    this._durableMessageProcessors[ObjTypes.ILBC] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.APP) >= 0)
		    this._durableMessageProcessors[ObjTypes.APP] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.RDL) >= 0)
		    this._durableMessageProcessors[ObjTypes.RDL] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.LOCATION) >= 0)
		    this._durableMessageProcessors[ObjTypes.LOCATION] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.FILE) >= 0)
	        this._durableMessageProcessors[ObjTypes.FILE] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.VIDEO) >= 0)
		    this._durableMessageProcessors[ObjTypes.VIDEO] = cop;
		if (options.enabledProcessors.indexOf(ObjTypes.COMMENT) >= 0)
		    this._durableMessageProcessors[ObjTypes.COMMENT] = cop;
	    if (options.enabledProcessors.indexOf(ObjTypes.LIKE) >= 0)
		    this._durableMessageProcessors[ObjTypes.LIKE] = new LikeProcessor();

		this._durableMessageProcessors[ObjTypes.LAST_READ] = new LastReadProcessor();
		this._durableMessageProcessors[ObjTypes.FEED_DETAILS] = new FeedDetailsProcessor();
		this._durableMessageProcessors[ObjTypes.FEED_MEMBERSHIP] = new MembershipProcessor();
		this._durableMessageProcessors[ObjTypes.FEED_INVITATION] = new FeedInvitationProcessor();
		this._durableMessageProcessors[ObjTypes.CONTACT] = new ContactProcessor();
		this._durableMessageProcessors[ObjTypes.BLOB_REFERENCE] = new BlobRefProcessor();
		this._durableMessageProcessors[ObjTypes.EBLOB_REFERENCE] = new BlobRefProcessor();

		this._durableMessageProcessors["notificationRead"] = noop;
		this._durableMessageProcessors["history"] = noop;
		this._durableMessageProcessors["delete"] = noop;
		this._durableMessageProcessors["!profilePublicState"] = noop;
		this._durableMessageProcessors["!itemId"] = noop;
		this._durableMessageProcessors["!cloud"] = noop;
		this._durableMessageProcessors["profile"] = noop;
		this._durableMessageProcessors["removal_notice"] = noop;
	}

	getProcessorForType(type) {
		var processor = this._durableMessageProcessors[type];
		if (processor) {
			return processor;
		}
		if (type.startsWith("+")) {
			return this._chatObjectProcessor;
		}
		return null;
	}

	processDurableMessage(message, options) {
		if (this._db) {
			this._processDurableMessage.call(this, message, options);
		} else {
			this._client.store.getFeeds((feedsDb) => {
				this._client.store.getMessageReceipts((receiptsDb) => {
					this._client.store.getAccounts((accountsDb) => {
						this._client.store.getIdentityHashes((identityHashesDb) => {
							this._db = {
								feeds: feedsDb,
								accounts: accountsDb,
								receipts: receiptsDb,
								identityHashes: identityHashesDb
							};
							this._processDurableMessage.call(this, message, options);
						});
					})
				});
			});
		}
	}

	_processDurableMessage(message, options) {
		var db = this._db;
		var proc = this.getProcessorForType(message.Id.Type);
		if (typeof(proc) != 'undefined' && proc !== null) {
			try {
				var client = this._client;
				var feedIdentifier = JSON.stringify(message.Feed.encode());
				client.feed._ensureFeed(db.feeds, feedIdentifier, (feed) => {
					var ldId = message.Id;
					var receiptId = client.messaging.makeUniqueMessageId(feed, ldId);
					db.receipts.getOrCreateObject(receiptId, function(receipt, existing) {
						if (existing) {
							// TODO: dedupe?
						}

						var processMessage = (sender) => {
							var task = undefined;
							try {
								if (message.Deleted) {
									if (typeof proc.processDelete == 'function') {
										task = proc.processDelete(client, db, feed, sender, message, receipt);
									}
								} else {
									task = proc.processMessage(client, db, feed, sender, message, receipt);
								}
							} catch (e) {
								console.log("Error processing message of type " + message.Id.Type, e);
							}

							receipt.type = message.Id.Type;
							if (task && typeof task.then === 'function') {
								task.then(() => {
									db.receipts.update(receipt);
								});
							} else {
								db.receipts.update(receipt);
							}
						};

						if (message.Owner) {
							db.accounts.getOrCreateObject(message.Owner, processMessage);
						} else {
							processMessage(null);
						}
					});
				});
			} catch (e) {
				console.error("Error processing message of type " + message.Id.Type, e);
			}
		} else {
			console.log("Not processing message of type " + message.Id.Type);
            if (message.Id.Type.substr("+pokemon.") == "+pokemon.") {
                this._client.events._notify('messages');
            }
		}

		if (options != undefined && options.pushed) {
			this._client.events._notifyMessagePushed(message);
		}
	}

	processDurableMessages(messages) {
		// Run all messages immediately
		/*
		for (var i = 0; i < messages.length; i++) {
			this.processDurableMessage(messages[i]);
		}
		*/

		// Schedule all messages together
		/*
		async.nextTick(() => {
			for (var i = 0; i < messages.length; i++) {
				this.processDurableMessage(messages[i]);
			}
		});
		*/

		// Each message scheduled on main thread

		messages.forEach((msg) => {
			async.nextTick(() => {
				this.processDurableMessage(msg);
			});
		});

	}

	processRealtimeMessage(message) {
		console.log("received realtime message:");
		console.log(message);
	}
}

module.exports = LongdanMessageProcessor;
