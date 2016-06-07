var LDMessage = require('../../longdan/ldproto/LDMessage');


class LikeProcessor {

	processMessage(client, db, feed, sender, msg) {
		var fake = new LDMessage(JSON.parse(msg.Id.Id.toString()));
		var ldId = fake.Id;
		var referenceKey = client.messaging.makeUniqueMessageId(feed, ldId);
		var like = JSON.parse(msg.Body);
		this._processLike(client, db, feed, sender, referenceKey, like);
	}

	processDelete(client, db, feed, sender, msg) {
		var fake = new LDMessage(JSON.parse(msg.Id.Id.toString()));
		var ldId = fake.Id;
		var referenceKey = client.messaging.makeUniqueMessageId(feed, ldId);
		var like = {
			Tally: 0,
			Aggregate: 0
		};
		var senderAccount = fake.Owner;
		db.accounts.getObjectByKey(senderAccount, (sender) => {
			this._processLike(client, db, feed, sender, referenceKey, like);
		});
	}

	_processLike(client, db, feed, sender, referenceKey, like) {

		db.receipts.getObjectByKey(referenceKey, (receipt) => {
			if (receipt) {
				var msgId = client.store.getObjectId(receipt);
				var feedId = client.store.getObjectId(feed);
				client.store.getFeedObjects(feedId, (objectsDb) => {
					objectsDb.getObjectByKey(msgId, (obj) => {
						if (obj) {
							var liker = client.store.getObjectId(sender);

							// Direct
							obj.likes[liker] = like.Tally;
							if (!obj.likes[liker]) {
								delete obj.likes[liker];
							}
							var totalLikes = 0;
							for (var k in obj.likes) {
								totalLikes += obj.likes[k];
							}
							obj.likeCount = totalLikes;

							// Aggregate
							obj.aggregateLikes[liker] = like.Aggregate;
							if (!obj.aggregateLikes[liker]) {
								delete obj.aggregateLikes[liker];
							}
							var totalAgg = 0;
							for (var k in obj.aggregateLikes) {
								totalAgg += obj.aggregateLikes[k];
							}
							obj.aggregateLikeCount = totalAgg;

							if (sender.owned) {
								obj.selfLikeCount = like.Tally;
								obj.aggregateSelfLikeCount = like.Aggregate;
							}

							objectsDb.update(obj, () => {
								// poke for listeners
								db.receipts.update(receipt);
							});
						}
					});
				});
			}
		});
	}
}

module.exports = LikeProcessor;