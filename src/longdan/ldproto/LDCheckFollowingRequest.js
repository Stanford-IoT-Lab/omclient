var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDCheckFollowingRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
LDCheckFollowingRequest.prototype=new LDJSONLoggable();
LDCheckFollowingRequest.prototype.constructor = LDCheckFollowingRequest;
var _=LDCheckFollowingRequest.prototype;
_.__type="LDCheckFollowingRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
LDCheckFollowingRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"cf":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCheckFollowingRequest;
