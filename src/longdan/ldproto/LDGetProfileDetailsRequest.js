var LDGetProfileDetailsResponse = require('./LDGetProfileDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetProfileDetailsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDGetProfileDetailsRequest.prototype=new LDJSONLoggable();
LDGetProfileDetailsRequest.prototype.constructor = LDGetProfileDetailsRequest;
var _=LDGetProfileDetailsRequest.prototype;
_.__type="LDGetProfileDetailsRequest";
_.__rt=LDGetProfileDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDGetProfileDetailsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"p":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetProfileDetailsRequest;
