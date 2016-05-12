var LDWallResponse = require('./LDWallResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetUserWallRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.PostsToGet=e['n'];
	$.After=e['t'];
}
LDGetUserWallRequest.prototype=new LDJSONLoggable();
LDGetUserWallRequest.prototype.constructor = LDGetUserWallRequest;
var _=LDGetUserWallRequest.prototype;
_.__type="LDGetUserWallRequest";
_.__rt=LDWallResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.PostsToGet!=null)o['n']=$.PostsToGet;
	if($.After!=null)o['t']=$.After;
	return o;
}
_.Account=null;
_.ContinuationKey=null;
_.PostsToGet=null;
_.After=null;
LDGetUserWallRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"guw":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetUserWallRequest;
