var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDListBlockedUsersRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDListBlockedUsersRequest.prototype=new LDJSONLoggable();
LDListBlockedUsersRequest.prototype.constructor = LDListBlockedUsersRequest;
var _=LDListBlockedUsersRequest.prototype;
_.__type="LDListBlockedUsersRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDListBlockedUsersRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"l":o};o=t;
	t={"#":id,"um":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDListBlockedUsersRequest;
