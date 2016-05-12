var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDSetAppleBadgeCountRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.BadgeCount=e['b'];
}
LDSetAppleBadgeCountRequest.prototype=new LDJSONLoggable();
LDSetAppleBadgeCountRequest.prototype.constructor = LDSetAppleBadgeCountRequest;
var _=LDSetAppleBadgeCountRequest.prototype;
_.__type="LDSetAppleBadgeCountRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BadgeCount!=null)o['b']=$.BadgeCount;
	return o;
}
_.BadgeCount=null;
LDSetAppleBadgeCountRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"b":o};o=t;
	t={"#":id,"i":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetAppleBadgeCountRequest;
