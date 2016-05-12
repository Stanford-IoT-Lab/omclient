var LDJSONLoggable = require('./LDJSONLoggable');
var LDCloudConfig = require('./LDCloudConfig');

function LDGetCloudConfigResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.Config=new LDCloudConfig(e['c']);
}
LDGetCloudConfigResponse.prototype=new LDJSONLoggable();
LDGetCloudConfigResponse.prototype.constructor = LDGetCloudConfigResponse;
var _=LDGetCloudConfigResponse.prototype;
_.__type="LDGetCloudConfigResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Config!=null)o['c']=$.Config.encode();
	return o;
}
_.Config=null;

module.exports=LDGetCloudConfigResponse;
