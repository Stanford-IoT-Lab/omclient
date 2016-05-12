var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDFlagUserRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Reason=e['r'];
}
LDFlagUserRequest.prototype=new LDJSONLoggable();
LDFlagUserRequest.prototype.constructor = LDFlagUserRequest;
var _=LDFlagUserRequest.prototype;
_.__type="LDFlagUserRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Reason!=null)o['r']=$.Reason;
	return o;
}
_.Account=null;
_.Reason=null;
LDFlagUserRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"F":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDFlagUserRequest;
