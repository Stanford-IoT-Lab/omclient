var LDJSONLoggable = require('./LDJSONLoggable');

function LDApiKey(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['k']!=null)$.ClientApiKeyId=new Buffer(e['k'],'base64');
	if(e['s']!=null)$.ClientApiKeySecret=new Buffer(e['s'],'base64');
	if(e['S']!=null)$.ServerApiKeySecret=new Buffer(e['S'],'base64');
	$.CreationTime=e['t'];
	$.Deactivated=e['d'];
}
LDApiKey.prototype=new LDJSONLoggable();
LDApiKey.prototype.constructor = LDApiKey;
var _=LDApiKey.prototype;
_.__type="LDApiKey";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ClientApiKeyId!=null)o['k']=$.ClientApiKeyId.toString('base64');
	if($.ClientApiKeySecret!=null)o['s']=$.ClientApiKeySecret.toString('base64');
	if($.ServerApiKeySecret!=null)o['S']=$.ServerApiKeySecret.toString('base64');
	if($.CreationTime!=null)o['t']=$.CreationTime;
	if($.Deactivated!=null)o['d']=$.Deactivated;
	return o;
}
_.ClientApiKeyId=null;
_.ClientApiKeySecret=null;
_.ServerApiKeySecret=null;
_.CreationTime=null;
_.Deactivated=null;

module.exports=LDApiKey;
