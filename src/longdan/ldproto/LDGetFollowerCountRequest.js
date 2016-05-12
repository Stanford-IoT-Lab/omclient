var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetFollowerCountRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
LDGetFollowerCountRequest.prototype=new LDJSONLoggable();
LDGetFollowerCountRequest.prototype.constructor = LDGetFollowerCountRequest;
var _=LDGetFollowerCountRequest.prototype;
_.__type="LDGetFollowerCountRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
LDGetFollowerCountRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gfc":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetFollowerCountRequest;
