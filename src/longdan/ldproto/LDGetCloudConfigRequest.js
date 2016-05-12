var LDGetCloudConfigResponse = require('./LDGetCloudConfigResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetCloudConfigRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDGetCloudConfigRequest.prototype=new LDJSONLoggable();
LDGetCloudConfigRequest.prototype.constructor = LDGetCloudConfigRequest;
var _=LDGetCloudConfigRequest.prototype;
_.__type="LDGetCloudConfigRequest";
_.__rt=LDGetCloudConfigResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDGetCloudConfigRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"g":o};o=t;
	t={"#":id,"cs":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetCloudConfigRequest;
