var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetAddMeLinkRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDGetAddMeLinkRequest.prototype=new LDJSONLoggable();
LDGetAddMeLinkRequest.prototype.constructor = LDGetAddMeLinkRequest;
var _=LDGetAddMeLinkRequest.prototype;
_.__type="LDGetAddMeLinkRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDGetAddMeLinkRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"a":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetAddMeLinkRequest;
