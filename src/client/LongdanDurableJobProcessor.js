var OMFeed = require("./model/OMFeed");
var ObjTypes = require("./model/ObjTypes");
var async = require('async');

var GLOBAL_SLICE = 314159265359;

class LongdanDurableJobProcessor {

	constructor(client) {
		this._client = client;
		this._queues = {};
		this._startupQueue = [];
	}

	start() {
		// TODO: load from DB
		var q = this._startupQueue;
		this._startupQueue = undefined;
		q.forEach((job) => {
			this._scheduleJobInternal(job);
		});
	}

	scheduleJob(job) {
		if (this._startupQueue !== undefined) {
			this._startupQueue.push(job);
		} else {
			this._scheduleJobInternal(job);
		}
	}

	executeJobImmediate(job) {
		if (typeof job.requestAboutToBeScheduled == 'function')
			job.requestAboutToBeScheduled(this._client);

		job.perform(this._client, (err, result) => {
			if (!err) {
				if (typeof job.requestCommitted == 'function') {
					job.requestCommitted(this._client);
				}
			}

			if (typeof job.requestComplete == 'function') {
				job.requestComplete(this._client, err, result);
			}
		});
	}

	_scheduleJobInternal(job) {
		var slice = job.slice;
		if (slice === undefined) {
			slice = GLOBAL_SLICE;
		}
		var q = this._queues[slice];
		if (q === undefined) {
			this._queues[slice] = q = new LongdanDurableJobRunner(this, slice);
		}

		async.nextTick(function() {
			q.scheduleJob(job);
		});
	}
}

class LongdanDurableJobRunner {

	constructor(jobProcessor, slice) {
		this._jobProcessor = jobProcessor;
		this._client = jobProcessor._client;
		this._slice = slice;
		this._queue = [];
		this._activeJob = undefined;
	}

	scheduleJob(job) {
		// TODO: persist to DB
		// Then:
		if (job.requestCommitted !== undefined)
			job.requestCommitted(this._client);

		if (job.requestAboutToBeScheduled !== undefined)
			job.requestAboutToBeScheduled(this._client);

		this._queue.push(job);
		if (this._activeJob === undefined) {
			this._executeNextJob();
		}
	}

	_executeNextJob() {
		this._activeJob = this._queue.shift();
		if (this._activeJob === undefined) {
			this._jobProcessor._queues[this._slice] = undefined;
		} else {
			this._activeJob.perform(this._client, this._onJobComplete.bind(this, this._activeJob));
		}
	}

	_onJobComplete(job, err, result) {
		if (typeof job.requestComplete == 'function') {
			job.requestComplete(this._client, err, result);
		}

		if (err && !err.permanent) {
			// TODO: reschedule
		} else {
			// TODO: remove from database
			async.nextTick(this._executeNextJob.bind(this));
		}
	}
}

module.exports = LongdanDurableJobProcessor;