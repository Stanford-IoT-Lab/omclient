class MessagingApi {

	constructor(client) {
		this._ldClient = client;
		this.types = require('../client/model/ObjTypes');
	}
}

module.exports = MessagingApi;