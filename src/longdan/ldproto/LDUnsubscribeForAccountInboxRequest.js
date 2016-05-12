var LDJSONLoggable = require('./LDJSONLoggable');

function LDUnsubscribeForAccountInboxRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDUnsubscribeForAccountInboxRequest.prototype=new LDJSONLoggable();
LDUnsubscribeForAccountInboxRequest.prototype.constructor = LDUnsubscribeForAccountInboxRequest;
var _=LDUnsubscribeForAccountInboxRequest.prototype;
_.__type="LDUnsubscribeForAccountInboxRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDUnsubscribeForAccountInboxRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"U":o};o=t;
	t={"#":id,"i":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnsubscribeForAccountInboxRequest;
