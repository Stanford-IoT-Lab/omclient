/**
 * A simple QueryResult implementation backed by an array.
 */
OmQueryResult = function(res) {
	this.results = res;
}

OmQueryResult.prototype.forEach = function(cb) {
	this.results.forEach(cb);
}

OmQueryResult.prototype.getCount = function() {
	return this.results.length;
}

OmQueryResult.prototype.toArray = function(cb) {
	cb(this.results);
}

module.exports = OmQueryResult;