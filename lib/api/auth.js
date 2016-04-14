var AuthApi = function(client) {
	this._ldClient = client;
}

AuthApi.prototype.getAccount = function() {
	return this._ldClient.account;
}

AuthApi.prototype.isAuthenticated = function() {
	return this._ldClient.account != null;
}

AuthApi.prototype.logout = function(cb) {
	this._ldClient.auth.logout(cb);
}

module.exports = AuthApi;