var LDGetPostResponse = require('./LDGetPostResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function LDGetPostRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
}
LDGetPostRequest.prototype=new LDJSONLoggable();
LDGetPostRequest.prototype.constructor = LDGetPostRequest;
var _=LDGetPostRequest.prototype;
_.__type="LDGetPostRequest";
_.__rt=LDGetPostResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	return o;
}
_.PostId=null;
LDGetPostRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gp":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetPostRequest;
