class FeedInvitationProcessor {

	processMessage(client, db, feed, sender, msg) {
		//var ldHash = new LDIdentityHash(JSON.parse(msg.Id.Id.toString("utf8")));
		var ldHashString = msg.Id.Id.toString("utf8");

		var feedId = client.store.getObjectId(feed);
		db.feeds.getObjectById(feedId, (feed) => {
			if (!feed) {
				console.warn("Feed was removed while adding invitation!");
				return;
			}

			if (!feed.invitations)
				feed.invitations = [];

			var needed = true;
			feed.invitations.forEach((invitation) => {
				if (invitation == ldHashString) {
					needed = false;
					return false;
				}
			});

			if (needed) {
				feed.invitations.push(ldHashString);
				db.feeds.update(feed);
			}
		})
	}
}

module.exports = FeedInvitationProcessor;