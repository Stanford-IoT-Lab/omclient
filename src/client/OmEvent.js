var async = require("async");

class OmEvent {

	constructor(client) {
		this._client = client;

		this.FEEDS = "feeds";
		this.ACCOUNTS = "accounts";
		this.DB_LOADED = "dbloaded";

		this._events = {};
		this._eventKey = 0;
		this._pendingEvents = {};
		this._pushReceivers = {};
	}

	register(label, fn) {
		if (!(label in this._events)) {
			this._events[label] = {};
		}

		var key = "" + (++(this._eventKey));
		this._events[label][key] = fn;

		return () => delete this._events[label][key];
	}

	_notify(label) {
		this._pendingEvents[label] = true;
		async.nextTick(this._releaseNotifications.bind(this));
	}

	_releaseNotifications() {
		var pending = this._pendingEvents;
		this._pendingEvents = {};
		for (var label in pending) {
			var listeners = this._events[label];
			if (listeners !== undefined) {
				for (var f in listeners) {
					try {
						listeners[f](label);
					} catch (e) {
						console.error("failed to deliver event, removing callback", e);
						delete listeners[f];
					}
				}
			}
		}
	}

	registerMessagePushReceiver(fn) {
		var key = "" + (++(this._eventKey));
		this._pushReceivers[key] = fn;

		return () => delete this._pushReceivers[key];
	}

	_notifyMessagePushed(msg) {
		for (var i in this._pushReceivers) {
			try {
				this._pushReceivers[i](msg);
			} catch (e) {
				console.error("failed to deliver push event, removing callback", e);
				delete this._pushReceivers[i];
			}
		}
	}
}

module.exports = OmEvent;