var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetFeedbackAccountRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDGetFeedbackAccountRequest.prototype=new LDJSONLoggable();
LDGetFeedbackAccountRequest.prototype.constructor = LDGetFeedbackAccountRequest;
var _=LDGetFeedbackAccountRequest.prototype;
_.__type="LDGetFeedbackAccountRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDGetFeedbackAccountRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gf":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetFeedbackAccountRequest;
