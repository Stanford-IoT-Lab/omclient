class AuthApi {

	constructor(client) {
		this._ldClient = client;
	}

	getAccount() {
		return this._ldClient.account;
	}

	isAuthenticated() {
		return this._ldClient.account != null;
	}

	logout(cb) {
		this._ldClient.auth.logout(cb);
	}
}

module.exports = AuthApi;