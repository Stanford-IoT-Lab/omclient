var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDSendRealtimeMessageToAllFollowersRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
}
LDSendRealtimeMessageToAllFollowersRequest.prototype=new LDJSONLoggable();
LDSendRealtimeMessageToAllFollowersRequest.prototype.constructor = LDSendRealtimeMessageToAllFollowersRequest;
var _=LDSendRealtimeMessageToAllFollowersRequest.prototype;
_.__type="LDSendRealtimeMessageToAllFollowersRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	return o;
}
_.Type=null;
_.Body=null;
LDSendRealtimeMessageToAllFollowersRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sr":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSendRealtimeMessageToAllFollowersRequest;
