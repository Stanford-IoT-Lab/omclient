var LDCreatePlaygroundResponse = require('./LDCreatePlaygroundResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDCreatePlaygroundRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
}
LDCreatePlaygroundRequest.prototype=new LDJSONLoggable();
LDCreatePlaygroundRequest.prototype.constructor = LDCreatePlaygroundRequest;
var _=LDCreatePlaygroundRequest.prototype;
_.__type="LDCreatePlaygroundRequest";
_.__rt=LDCreatePlaygroundResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	return o;
}
_.Type=null;
LDCreatePlaygroundRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"p":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCreatePlaygroundRequest;
