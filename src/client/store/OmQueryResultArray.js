/**
 * A simple QueryResult implementation backed by an array.
 */
var OmQueryResult = function(res) {
	this.results = res;
}

OmQueryResult.prototype.forEach = function(cb) {
	this.results.forEach(cb);
}

OmQueryResult.prototype.toArray = function(cb) {
	cb(this.results);
}

module.exports = OmQueryResult;