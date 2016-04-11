var AuthApi = function(client) {
	this._ldClient = client;
}

AuthApi.prototype.getAccount = function() {
	return this._ldClient.account;
}

AuthApi.prototype.isAuthenticated = function() {
	return this._ldClient.account != null;
}

module.exports = AuthApi;