var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDGPSLocation = require('./LDGPSLocation');
var LDItemId = require('./LDItemId');
var LDGameChallengeId = require('./LDGameChallengeId');

function LDExtendChallengeRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Id=new LDGameChallengeId(e['i']);
	$.ReceiverAccount=e['r'];
	if(e['g']!=null)$.GameId=new LDItemId(e['g']);
	$.Score=e['s'];
	$.GameState=e['t'];
	if(e['l']!=null)$.Location=new LDGPSLocation(e['l']);
}
LDExtendChallengeRequest.prototype=new LDJSONLoggable();
LDExtendChallengeRequest.prototype.constructor = LDExtendChallengeRequest;
var _=LDExtendChallengeRequest.prototype;
_.__type="LDExtendChallengeRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Id!=null)o['i']=$.Id.encode();
	if($.ReceiverAccount!=null)o['r']=$.ReceiverAccount;
	if($.GameId!=null)o['g']=$.GameId.encode();
	if($.Score!=null)o['s']=$.Score;
	if($.GameState!=null)o['t']=$.GameState;
	if($.Location!=null)o['l']=$.Location.encode();
	return o;
}
_.Id=null;
_.ReceiverAccount=null;
_.GameId=null;
_.Score=null;
_.GameState=null;
_.Location=null;
LDExtendChallengeRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"c":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDExtendChallengeRequest;
