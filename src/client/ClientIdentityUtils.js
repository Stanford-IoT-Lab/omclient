var async = require("async");
var RawIdentity = require("./model/RawIdentity");

var LDSetProfileNameRequest = require('../longdan/ldproto/LDSetProfileNameRequest');
var LDGetOmletContactProfileRequest = require('../longdan/ldproto/LDGetOmletContactProfileRequest');
var LDGetContactProfileRequest = require('../longdan/ldproto/LDGetContactProfileRequest');
var LDIdentityHash = require('../longdan/ldproto/LDIdentityHash');

class IdentityUtils {

	constructor(client) {
		this._client = client;
	}

	createRawIdentity(type, value) {
		return RawIdentity.create(type, value);
	}

	parseRawIdentity(identity) {
		return RawIdentity.parse(identity);
	}

	setUserDisplayName(name, cb) {
		var req = new LDSetProfileNameRequest();
		req.Name = name;
		this._client.msgCall(req, (e, resp, req) => {
			if (typeof cb == 'function') {
				cb(e, resp);
			}
		});
	}

	lookupAccount(account, cb) {
		var req = new LDGetOmletContactProfileRequest();
		req.RequestedAccount = account;
		this._client.msgCall(req, (err, resp, req) => {
			if (err) {
				cb(err);
			} else {
				cb(undefined, resp.ContactProfile);
			}
		});
	}

	_addAccountToContacts(account, cb) {
		this.ensureIdentity({
			account: account
		}, cb);
	}

	getAccountsForIdentifiers(accounts, cb) {
		this._client.store.getAccounts((accountsDb) => {
			this._getAccountsForIdentifiersInternal(accountsDb, accounts, [], [], cb);
		});
	}

	_getAccountsForIdentifiersInternal(accountsDb, accounts, matches, misses, cb) {
		if (accounts.length == 0) {
			cb(matches, misses);
		} else {
			var identifier = accounts.shift();
			accountsDb.getObjectByKey(identifier, (account) => {
				if (account) {
					matches.push(account);
				} else {
					misses.push(identifier)
				}
				this._getAccountsForIdentifiersInternal(accountsDb, accounts, matches, misses, cb);
			});
		}
	}

	getAccountsForIdentityHashes(identityHashes, cb) {
		// hot path
		if (identityHashes.length == 0) {
			cb([], []);
			return;
		}

		this._client.store.getIdentityHashes((idDb) => {
			this._client.store.getAccounts((accountsDb) => {
				this._getAccountsForIdentityHashesInternal(idDb, accountsDb, identityHashes, [], [], cb);
			});
		});
	}

	_getAccountsForIdentityHashesInternal(idDb, accountsDb, hashes, matches, misses, cb) {
		if (hashes.length == 0) {
			cb(matches, misses);
		} else {
			var hash = hashes.shift();
			idDb.getObjectByKey(hash, (entry) => {
				if (entry) {
					accountsDb.getObjectById(entry.accountId, (account) => {
						if (account) {
							matches.push(account.account);
							this._getAccountsForIdentityHashesInternal(idDb, accountsDb, hashes, matches, misses, cb);
						} else {
							console.warn("Found an accountId but no matching account: " + entry.accountId + " / " + hash);
							misses.push(hash);
							this._getAccountsForIdentityHashesInternal(idDb, accountsDb, hashes, matches, misses, cb);
						}
					});
				} else {
					var req = new LDGetContactProfileRequest();
					req.IdentityHash = new LDIdentityHash(JSON.parse(hash));

					this._client.msgCall(req, (err, resp, req) => {
						if (err) {
							console.warn("error while getting contact profile: " +err);
							misses.push(hash);
							return this._getAccountsForIdentityHashesInternal(idDb, accountsDb, hashes, matches, misses, cb);
						}
						if (!resp.Account) {
							console.log('found no account for identity ' + hash);
							misses.push(hash);
							return this._getAccountsForIdentityHashesInternal(idDb, accountsDb, hashes, matches, misses, cb);
						}

						console.log('resolved identity ' + hash + ' to ' + resp.Account);
						accountsDb.getOrCreateObject(resp.Account, (account) => {
							idDb.getOrCreateObject(hash, () => {
								matches.push(account.account);
								this._getAccountsForIdentityHashesInternal(idDb, accountsDb, hashes, matches, misses, cb);
								return;
							}, { accountId: this._client.store.getObjectId(account) });

							if (account.hashidentities) {
								if (account.hashidentities.indexOf(hash) >= 0) {
									return;
								}
								account.hashidentities.push(hash);
							} else {
								account.hashidentities = [hash];
							}
							accountsDb.update(account);
							this._refreshAccountProfile(resp.Account);
						}, { account: resp.Account });
					});
				}
			});
		}
	}

	ensureIdentity(details, cb) {
		var account = details.account;
		this._client.store.getAccounts((accounts) => {
			accounts.getObjectByKey(account, (err, existing) => {
				if (existing) {
					if (existing.upToDate) {
						if (existing.profileVersion < details.profileVersion) {
							existing.name = details.name;
							existing.thumbnail = details.thumbnail;
							accounts.update(existing, (existing) => {
								this._updateFeedNames(existing);
							});
						}
					} else {
						this._refreshAccountProfile(account);
					}

					if (typeof(cb) == 'function') {
						async.nextTick(() => {
							cb(existing);
						}, 0);
					}
				} else {
					accounts.getOrCreateObject(account, (identity) => {
						this._refreshAccountProfile(account);

						if (typeof(cb) == 'function') {
							async.nextTick(() => {
								cb(identity);
							}, 0);
						}
					}, details);
				}
			});
		});
	}

	_refreshAccountProfile(account) {
		var req = new LDGetOmletContactProfileRequest();
		req.RequestedAccount = account;
		this._client.msgCall(req, (err, resp, req) => {
			if (err) {
				// TODO: retry
				return;
			}

			var profile = resp.ContactProfile;
			if (profile === null)
				return;

			this._client.store.getAccounts((accountsDb) => {
				accountsDb.getOrCreateObject(account, (identity) => {
					var newName = identity.name != profile.Name;

					if (profile.ProfilePictureLink) {
						var hash = this._client.blob.hashFromLongdanUrl(profile.ProfilePictureLink);
						this._client.blob.ensureBlobSource(hash, profile.ProfilePictureLink);
						identity.thumbnailHash = hash;
					}

					identity.name = profile.Name;
					identity.profileVersion = profile.Version;
					identity.hasAppTime = profile.HasAppTime;

					identity.upToDate = true;
					accountsDb.update(identity, (identity) => {
						if (newName) {
							this._updateFeedNames(identity);
						}
					});
				});
			});
		});
	}

	_updateFeedNames(identity) {
		identity.feeds.forEach((feedId) => {
			this._client.feed._generateFeedName(feedId);
		});
	}
}

module.exports = IdentityUtils;
