var AuthApi = function(client) {
	this._ldClient = client;
}

AuthApi.getAccount = function() {
	return this._ldClient.account;
}

AuthApi.isAuthenticated = function() {
	return this._ldClient.account != null;
}

module.exports = AuthApi;