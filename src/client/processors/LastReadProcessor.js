class LastReadProcessor {

	processMessage(client, db, feed, sender, msg) {
		var t = Math.round(msg.Timestamp / 1000);
		// TODO, per-user/feed read status

		if (sender.owned) {
			if (feed.lastReadTime < t) {
				feed.lastReadTime = t;
				feed.numUnread = 0;
				db.feeds.update(feed);
			}
		}
	}
}
module.exports = LastReadProcessor;