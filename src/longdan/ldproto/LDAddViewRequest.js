var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function LDAddViewRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
}
LDAddViewRequest.prototype=new LDJSONLoggable();
LDAddViewRequest.prototype.constructor = LDAddViewRequest;
var _=LDAddViewRequest.prototype;
_.__type="LDAddViewRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	return o;
}
_.PostId=null;
LDAddViewRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"v":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAddViewRequest;
