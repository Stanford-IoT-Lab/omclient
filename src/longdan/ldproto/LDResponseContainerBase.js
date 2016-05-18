var LDJSONLoggable = require('./LDJSONLoggable');
var LDPingResponse = require('./LDPingResponse');
var LDSimpleResponse = require('./LDSimpleResponse');
var LDCompleteChallengeResponse = require('./LDCompleteChallengeResponse');
var LDHelloChallengeResponse = require('./LDHelloChallengeResponse');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.SequenceNumber=e['#'];
	$.ErrorCode=e['!'];
	$.ErrorDetail=e['!!'];
	if(e['*']!=null)$.HelloChallenge=new LDHelloChallengeResponse(e['*']);
	if(e['+']!=null)$.CompleteChallenge=new LDCompleteChallengeResponse(e['+']);
	if(e['=']!=null)$.Simple=new LDSimpleResponse(e['=']);
	if(e['-']!=null)$.Ping=new LDPingResponse(e['-']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDResponseContainerBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.SequenceNumber!=null)o['#']=$.SequenceNumber;
	if($.ErrorCode!=null)o['!']=$.ErrorCode;
	if($.ErrorDetail!=null)o['!!']=$.ErrorDetail;
	if($.HelloChallenge!=null)o['*']=$.HelloChallenge.encode();
	if($.CompleteChallenge!=null)o['+']=$.CompleteChallenge.encode();
	if($.Simple!=null)o['=']=$.Simple.encode();
	if($.Ping!=null)o['-']=$.Ping.encode();
	return o;
}
_.SequenceNumber=null;
_.ErrorCode=null;
_.ErrorDetail=null;
_.HelloChallenge=null;
_.CompleteChallenge=null;
_.Simple=null;
_.Ping=null;

module.exports=O;
