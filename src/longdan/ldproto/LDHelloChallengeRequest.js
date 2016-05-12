var LDHelloChallengeResponse = require('./LDHelloChallengeResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDHelloChallengeRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['e']!=null)$.EphmeralKey=new Buffer(e['e'],'base64');
	if(e['k']!=null)$.SourceKey=new Buffer(e['k'],'base64');
	if(e['c']!=null)$.DestinationChallenge=new Buffer(e['c'],'base64');
	if(e['a']!=null)$.ApiKey=new Buffer(e['a'],'base64');
}
LDHelloChallengeRequest.prototype=new LDJSONLoggable();
LDHelloChallengeRequest.prototype.constructor = LDHelloChallengeRequest;
var _=LDHelloChallengeRequest.prototype;
_.__type="LDHelloChallengeRequest";
_.__rt=LDHelloChallengeResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.EphmeralKey!=null)o['e']=$.EphmeralKey.toString('base64');
	if($.SourceKey!=null)o['k']=$.SourceKey.toString('base64');
	if($.DestinationChallenge!=null)o['c']=$.DestinationChallenge.toString('base64');
	if($.ApiKey!=null)o['a']=$.ApiKey.toString('base64');
	return o;
}
_.EphmeralKey=null;
_.SourceKey=null;
_.DestinationChallenge=null;
_.ApiKey=null;
LDHelloChallengeRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"*":o};o=t;
	t={"q":o};o=t;
	return o;
}
LDHelloChallengeRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"*":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDHelloChallengeRequest;
