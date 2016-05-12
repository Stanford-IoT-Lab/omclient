var OMFeed = require("../model/OMFeed");
var ObjTypes = require("../model/ObjTypes");
var async = require('async');
var crypto = require("../../util/crypto");

var LDFeed = require('../../longdan/ldproto/LDFeed');
var LDTypedId = require('../../longdan/ldproto/LDTypedId');
var LDMessage = require('../../longdan/ldproto/LDMessage');
var LDOverwriteMessageRequest = require('../../longdan/ldproto/LDOverwriteMessageRequest');

class OverwriteMessageJob {

	constructor(account, feed, type, body, callback) {
		this.type = "OverwriteMessageJob";
		this._callback = callback;

		if (typeof feed == 'string') {
			feed = new LDFeed(JSON.parse(feed));
		} else if (typeof feed.identifier == 'string') {
			feed = new LDFeed(JSON.parse(feed.identifier));
		}

		if (!feed)
			callback("No feed specified");

		var request = {
			feed: JSON.stringify(feed.encode()),
			type: type,
			body: body,
			account: account
		};

		if (request.body._messageId) {
			request._messageId = request.body._messageId;
			request.body._messageId = undefined;
		}
		if (request._messageId === undefined) {
			request._messageId = crypto.pseudoRandomBytes(32).toString("base64");
		}

		if (request.body._attachments) {
			request._attachments = request.body._attachments;
			request.body._attachments = undefined;
		}

		this.loadRequest(request);
	}

	loadRequest(request) {
		this.request = request;
		this.slice = request.feed;

		var ldId = new LDTypedId();
		ldId.Type = request.type;
		ldId.Id = new Buffer(request._messageId, "base64");
		this._messageRequest = this._makeRequest(ldId, request.body);
	}

	requestAboutToBeScheduled(client) {

	}

	requestCommitted(client) {
		var message = new LDMessage();
		message.Id = this._messageRequest.Id;
		message.Body = this._messageRequest.Body;
		message.Feed = this._messageRequest.Feed;
		message.Owner = client.account;
		message.Timestamp = (new Date().getTime() + client._msg.serverTimeDelta) * 1000;
		message.Version = this._messageRequest.Version;
		client.longdanMessageProcessor.processDurableMessage(message);
	}

	_makeRequest(msgId, msgBody) {
		var req = new LDOverwriteMessageRequest();
		req.Owner = this.request.account;
		req.Id = msgId;
		req.Body = new Buffer(JSON.stringify(msgBody));
		req.Feed = new LDFeed(JSON.parse(this.request.feed));
		req.AnyMemberWritable = false;
		req.Version = 0;
		req.Deleted = false;
		return req;
	};

	perform(client, jobCallback) {
		this._client = client; // eh..
		this._sendObjInternal(this.request.type, this.request._messageId, this.request.body, jobCallback);
	}

	requestComplete(client, err, resp) {
		if (resp) {
			// TODO: update timestamp	    
		}
		if (typeof(this._callback) == 'function') {
			this._callback(err, resp, this._messageRequest);
		}
	}

	_sendObjInternal(type, msgKey, body, jobCallback) {
		var attachments = undefined;
		if (this.request._attachments !== undefined && this.request._attachments.length != 0) {
			attachments = this.request._attachments;
			this._sendObjAndAttachments(type, msgKey, body, attachments, jobCallback);
		} else {
			var msgId = new LDTypedId();
			msgId.Type = type;
			msgId.Id = new Buffer(msgKey, "base64");
			var req = this._makeRequest(msgId, body);

			this._client.msgCall(req, (err, resp, req) => {
				jobCallback(err, resp);
			});
		}
	}

	_sendObjAndAttachments(type, msgKey, body, attachments, callback) {
		if (attachments.length == 0) {
			this._sendObjInternal(type, msgKey, body, callback);
		} else {
			var blob = attachments.shift();
			var bref = {
				Hash: blob.hash,
				Source: blob.source,
				Category: blob.category,
				PushType: blob.pushType
			};

			var blobKey = crypto.pseudoRandomBytes(32).toString("base64");
			this._sendObjInternal(ObjTypes.BLOB_REFERENCE, blobKey, bref, (err, resp, req) => {
				if (err) {
					callback(err);
				} else {
					async.nextTick(() => {
						this._sendObjAndAttachments(type, msgKey, body, attachments, callback);
					});
				}
			});
		}
	}
}

module.exports = OverwriteMessageJob;