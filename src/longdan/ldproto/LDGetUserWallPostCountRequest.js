var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetUserWallPostCountRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
LDGetUserWallPostCountRequest.prototype=new LDJSONLoggable();
LDGetUserWallPostCountRequest.prototype.constructor = LDGetUserWallPostCountRequest;
var _=LDGetUserWallPostCountRequest.prototype;
_.__type="LDGetUserWallPostCountRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
LDGetUserWallPostCountRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"guwc":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetUserWallPostCountRequest;
