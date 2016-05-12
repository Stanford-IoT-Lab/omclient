var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function LDDeletePostRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
}
LDDeletePostRequest.prototype=new LDJSONLoggable();
LDDeletePostRequest.prototype.constructor = LDDeletePostRequest;
var _=LDDeletePostRequest.prototype;
_.__type="LDDeletePostRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	return o;
}
_.PostId=null;
LDDeletePostRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"dp":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDDeletePostRequest;
