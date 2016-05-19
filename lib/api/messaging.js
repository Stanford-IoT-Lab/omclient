var ObjTypes = require('../client/model/ObjTypes');

var MessagingApi = function(client) {
	this._ldClient = client;
}

MessagingApi.prototype.types = ObjTypes;

module.exports = MessagingApi;