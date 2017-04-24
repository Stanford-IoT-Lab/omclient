var LDContactDetails = require('../../longdan/ldproto/LDContactDetails');

class ContactProcessor {

	processMessage(client, db, feed, sender, msg) {
		// TODO: Protocol generator for ldobjects.
		var contact = new LDContactDetails(JSON.parse(msg.Body.toString("utf8")).c);

		if (contact.ProfilePictureLink) {
			var hash = client.blob.hashFromLongdanUrl(contact.ProfilePictureLink);
			client.blob.ensureBlobSource(hash, contact.ProfilePictureLink);
		}

		var idHashes = contact.Hashidentities.map((h) => {
			return JSON.stringify(h.encode());
		});

		client.identity.ensureIdentity({
			account: contact.Account,
			name: contact.Name,
			thumbnailHash: hash,
			hasAppTime: contact.HasAppTime,
			profileVersion: contact.Version,
			hashidentities: idHashes
				//linkedIdentities: contact.Identities
		}, (account) => {
			var accountId = client.store.getObjectId(account);
			idHashes.forEach((idHash) => {
				db.identityHashes.getObjectByKey(idHash, (existing) => {
					if (existing) {
						if (existing.accountId != accountId) {
							existing.accountId = accountId;
							db.identityHashes.update(existing);
						}
					} else {
						db.identityHashes.insert({
							identityHash: idHash,
							accountId: accountId
						});
					}
				})
			});
		});
	}
}

module.exports = ContactProcessor;