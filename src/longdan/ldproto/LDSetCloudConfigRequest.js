var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDCloudConfig = require('./LDCloudConfig');

function LDSetCloudConfigRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.Config=new LDCloudConfig(e['c']);
}
LDSetCloudConfigRequest.prototype=new LDJSONLoggable();
LDSetCloudConfigRequest.prototype.constructor = LDSetCloudConfigRequest;
var _=LDSetCloudConfigRequest.prototype;
_.__type="LDSetCloudConfigRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Config!=null)o['c']=$.Config.encode();
	return o;
}
_.Config=null;
LDSetCloudConfigRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"s":o};o=t;
	t={"#":id,"cs":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetCloudConfigRequest;
