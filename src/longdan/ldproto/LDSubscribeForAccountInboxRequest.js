var LDJSONLoggable = require('./LDJSONLoggable');

function LDSubscribeForAccountInboxRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDSubscribeForAccountInboxRequest.prototype=new LDJSONLoggable();
LDSubscribeForAccountInboxRequest.prototype.constructor = LDSubscribeForAccountInboxRequest;
var _=LDSubscribeForAccountInboxRequest.prototype;
_.__type="LDSubscribeForAccountInboxRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDSubscribeForAccountInboxRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"S":o};o=t;
	t={"#":id,"i":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSubscribeForAccountInboxRequest;
