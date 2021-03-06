class ChatObjectProcessor {

	processMessage(client, db, feed, sender, msg, receipt) {
		return new Promise((resolve, reject) => {
			var t = Math.round(msg.Timestamp / 1000);
			var body = JSON.parse(msg.Body);
			body.type = msg.Id.Type;
			body.senderId = client.store.getObjectId(sender);
			body.serverTimestamp = t;
			body.msgId = client.store.getObjectId(receipt);
			body.receipt = receipt;
			body.msgMeta = '';

			if(msg.Metadata){
				for (var i=0; i< msg.Metadata.byteLength; i++) {
					body.msgMeta += String.fromCharCode(msg.Metadata[i]);
				}
			}

			var feedId = client.store.getObjectId(feed);

			client.store.getFeedObjects(feedId, (objectsDb) => {
				feed.messageCount++;
				if (feed.renderableTime < t) {
					feed.renderableTime = t;
					feed.renderableObj = body;
				}

				if (feed.lastReadTime < t) {
					if (!client.feed.isFeedActive(feed)) {
						feed.numUnread++;
					}
				}

				db.feeds.update(feed);
				objectsDb.getObjectByKey(body.msgId, (existing) => {
					if (existing) {
						existing.serverTimestamp = t;
						existing.msgMeta = body.msgMeta;
						objectsDb.update(existing, () => {
							resolve(true);
						});
					} else {
						objectsDb.insert(body, () => {
							resolve(true);
						});
					}
				});
			});
		});
	}
}

module.exports = ChatObjectProcessor;
