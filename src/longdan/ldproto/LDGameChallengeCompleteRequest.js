var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDGPSLocation = require('./LDGPSLocation');
var LDGameChallengeId = require('./LDGameChallengeId');

function LDGameChallengeCompleteRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Id=new LDGameChallengeId(e['i']);
	$.Score=e['s'];
	$.ChallengeRejected=e['x'];
	if(e['l']!=null)$.ChallengeeLocation=new LDGPSLocation(e['l']);
}
LDGameChallengeCompleteRequest.prototype=new LDJSONLoggable();
LDGameChallengeCompleteRequest.prototype.constructor = LDGameChallengeCompleteRequest;
var _=LDGameChallengeCompleteRequest.prototype;
_.__type="LDGameChallengeCompleteRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Score!=null)o['s']=$.Score;
	if($.ChallengeRejected!=null)o['x']=$.ChallengeRejected;
	if($.ChallengeeLocation!=null)o['l']=$.ChallengeeLocation.encode();
	return o;
}
_.Id=null;
_.Score=null;
_.ChallengeRejected=null;
_.ChallengeeLocation=null;
LDGameChallengeCompleteRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"d":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGameChallengeCompleteRequest;
