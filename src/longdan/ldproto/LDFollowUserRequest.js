var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDFollowUserRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AccountToFollow=e['a'];
	$.Follow=e['f'];
}
LDFollowUserRequest.prototype=new LDJSONLoggable();
LDFollowUserRequest.prototype.constructor = LDFollowUserRequest;
var _=LDFollowUserRequest.prototype;
_.__type="LDFollowUserRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AccountToFollow!=null)o['a']=$.AccountToFollow;
	if($.Follow!=null)o['f']=$.Follow;
	return o;
}
_.AccountToFollow=null;
_.Follow=null;
LDFollowUserRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"f":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDFollowUserRequest;
