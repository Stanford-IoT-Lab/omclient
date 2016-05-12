var LDDirtyFeedsResponse = require('./LDDirtyFeedsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetDirtyFeedsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Since=e['s'];
}
LDGetDirtyFeedsRequest.prototype=new LDJSONLoggable();
LDGetDirtyFeedsRequest.prototype.constructor = LDGetDirtyFeedsRequest;
var _=LDGetDirtyFeedsRequest.prototype;
_.__type="LDGetDirtyFeedsRequest";
_.__rt=LDDirtyFeedsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Since!=null)o['s']=$.Since;
	return o;
}
_.Since=null;
LDGetDirtyFeedsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"d":o};o=t;
	t={"#":id,"i":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetDirtyFeedsRequest;
