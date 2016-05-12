var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetStreamingLinkRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDGetStreamingLinkRequest.prototype=new LDJSONLoggable();
LDGetStreamingLinkRequest.prototype.constructor = LDGetStreamingLinkRequest;
var _=LDGetStreamingLinkRequest.prototype;
_.__type="LDGetStreamingLinkRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDGetStreamingLinkRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"s":o};o=t;
	t={"#":id,"ps":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetStreamingLinkRequest;
