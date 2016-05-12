var LDJSONLoggable = require('./LDJSONLoggable');

function LDFeatureSetting(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.EnabledTime=e['t'];
}
LDFeatureSetting.prototype=new LDJSONLoggable();
LDFeatureSetting.prototype.constructor = LDFeatureSetting;
var _=LDFeatureSetting.prototype;
_.__type="LDFeatureSetting";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.EnabledTime!=null)o['t']=$.EnabledTime;
	return o;
}
_.EnabledTime=null;

module.exports=LDFeatureSetting;
