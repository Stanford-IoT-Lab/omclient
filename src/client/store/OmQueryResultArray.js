/**
 * A simple QueryResult implementation backed by an array.
 */
class OmQueryResult {

	constructor(res) {
		this.results = res;
	}

	forEach(cb) {
		this.results.forEach(cb);
	}

	toArray(cb) {
		cb(this.results);
	}
}

module.exports = OmQueryResult;