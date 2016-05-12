var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDDisconnectCloudSyncRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDDisconnectCloudSyncRequest.prototype=new LDJSONLoggable();
LDDisconnectCloudSyncRequest.prototype.constructor = LDDisconnectCloudSyncRequest;
var _=LDDisconnectCloudSyncRequest.prototype;
_.__type="LDDisconnectCloudSyncRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDDisconnectCloudSyncRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"d":o};o=t;
	t={"#":id,"cs":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDDisconnectCloudSyncRequest;
