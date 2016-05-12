var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDRefreshCloudConfigRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.DoNotTriggerSync=e['t'];
}
LDRefreshCloudConfigRequest.prototype=new LDJSONLoggable();
LDRefreshCloudConfigRequest.prototype.constructor = LDRefreshCloudConfigRequest;
var _=LDRefreshCloudConfigRequest.prototype;
_.__type="LDRefreshCloudConfigRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.DoNotTriggerSync!=null)o['t']=$.DoNotTriggerSync;
	return o;
}
_.DoNotTriggerSync=null;
LDRefreshCloudConfigRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"r":o};o=t;
	t={"#":id,"cs":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDRefreshCloudConfigRequest;
