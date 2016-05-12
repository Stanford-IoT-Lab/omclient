var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetFollowingCountRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
LDGetFollowingCountRequest.prototype=new LDJSONLoggable();
LDGetFollowingCountRequest.prototype.constructor = LDGetFollowingCountRequest;
var _=LDGetFollowingCountRequest.prototype;
_.__type="LDGetFollowingCountRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
LDGetFollowingCountRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gafc":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetFollowingCountRequest;
