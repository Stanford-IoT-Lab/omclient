var LDJSONLoggable = require('./LDJSONLoggable');
var LDPingRequest = require('./LDPingRequest');
var LDCompleteChallengeRequest = require('./LDCompleteChallengeRequest');
var LDHelloChallengeRequest = require('./LDHelloChallengeRequest');
var LDRpcContext = require('./LDRpcContext');

function LDRequestContainerBase(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.SequenceNumber=e['#'];
	if(e['@']!=null)$.Context=new LDRpcContext(e['@']);
	if(e['*']!=null)$.HelloChallenge=new LDHelloChallengeRequest(e['*']);
	if(e['+']!=null)$.CompleteChallenge=new LDCompleteChallengeRequest(e['+']);
	if(e['-']!=null)$.Ping=new LDPingRequest(e['-']);
}
LDRequestContainerBase.prototype=new LDJSONLoggable();
LDRequestContainerBase.prototype.constructor = LDRequestContainerBase;
var _=LDRequestContainerBase.prototype;
_.__type="LDRequestContainerBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.SequenceNumber!=null)o['#']=$.SequenceNumber;
	if($.Context!=null)o['@']=$.Context.encode();
	if($.HelloChallenge!=null)o['*']=$.HelloChallenge.encode();
	if($.CompleteChallenge!=null)o['+']=$.CompleteChallenge.encode();
	if($.Ping!=null)o['-']=$.Ping.encode();
	return o;
}
_.SequenceNumber=null;
_.Context=null;
_.HelloChallenge=null;
_.CompleteChallenge=null;
_.Ping=null;

module.exports=LDRequestContainerBase;
