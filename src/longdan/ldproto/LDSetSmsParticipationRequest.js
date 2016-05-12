var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDSetSmsParticipationRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.OptOut=e['o'];
}
LDSetSmsParticipationRequest.prototype=new LDJSONLoggable();
LDSetSmsParticipationRequest.prototype.constructor = LDSetSmsParticipationRequest;
var _=LDSetSmsParticipationRequest.prototype;
_.__type="LDSetSmsParticipationRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.OptOut!=null)o['o']=$.OptOut;
	return o;
}
_.OptOut=null;
LDSetSmsParticipationRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sp":o};o=t;
	t={"#":id,"o":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetSmsParticipationRequest;
