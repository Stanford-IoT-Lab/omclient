function NoopProcessor() {}

NoopProcessor.prototype.processMessage = function(client, db, feed, sender, msg) {}

module.exports = NoopProcessor;