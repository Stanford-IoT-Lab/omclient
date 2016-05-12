var LDGetStandardPostTagsResponse = require('./LDGetStandardPostTagsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetStandardPostTagsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDGetStandardPostTagsRequest.prototype=new LDJSONLoggable();
LDGetStandardPostTagsRequest.prototype.constructor = LDGetStandardPostTagsRequest;
var _=LDGetStandardPostTagsRequest.prototype;
_.__type="LDGetStandardPostTagsRequest";
_.__rt=LDGetStandardPostTagsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDGetStandardPostTagsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gspt":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetStandardPostTagsRequest;
