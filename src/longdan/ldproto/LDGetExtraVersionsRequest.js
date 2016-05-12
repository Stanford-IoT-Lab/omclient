var LDGetExtraVersionsResponse = require('./LDGetExtraVersionsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetExtraVersionsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDGetExtraVersionsRequest.prototype=new LDJSONLoggable();
LDGetExtraVersionsRequest.prototype.constructor = LDGetExtraVersionsRequest;
var _=LDGetExtraVersionsRequest.prototype;
_.__type="LDGetExtraVersionsRequest";
_.__rt=LDGetExtraVersionsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDGetExtraVersionsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"e":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetExtraVersionsRequest;
