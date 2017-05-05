class MembershipProcessor {

	processMessage(client, db, feed, sender, msg) {
		var account = msg.Id.Id.toString("utf8");
		client.feed._ensureFeedMember(feed, account);

		client.identity.ensureIdentity({
			account: account,
			profileVersion: Number.MIN_VALUE
		});
	}
}

module.exports = MembershipProcessor;
