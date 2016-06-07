class LastReadProcessor {

	processMessage(client, db, feed, sender, msg) {
		//console.log("LastRead " + sender.name + " @ " + msg.Body.toString("utf8"));
	}
}
module.exports = LastReadProcessor;