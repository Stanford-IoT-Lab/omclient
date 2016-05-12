var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function LDLikePostRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ud']!=null)$.PostId=new LDPostId(e['ud']);
	$.Like=e['l'];
}
LDLikePostRequest.prototype=new LDJSONLoggable();
LDLikePostRequest.prototype.constructor = LDLikePostRequest;
var _=LDLikePostRequest.prototype;
_.__type="LDLikePostRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['ud']=$.PostId.encode();
	if($.Like!=null)o['l']=$.Like;
	return o;
}
_.PostId=null;
_.Like=null;
LDLikePostRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"l":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDLikePostRequest;
