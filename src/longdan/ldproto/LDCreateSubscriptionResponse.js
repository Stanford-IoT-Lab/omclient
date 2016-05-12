var LDJSONLoggable = require('./LDJSONLoggable');

function LDCreateSubscriptionResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.PublishingUrl=e['u'];
	$.Account=e['a'];
	if(e['k']!=null)$.DevicePrivateKey=new Buffer(e['k'],'base64');
}
LDCreateSubscriptionResponse.prototype=new LDJSONLoggable();
LDCreateSubscriptionResponse.prototype.constructor = LDCreateSubscriptionResponse;
var _=LDCreateSubscriptionResponse.prototype;
_.__type="LDCreateSubscriptionResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PublishingUrl!=null)o['u']=$.PublishingUrl;
	if($.Account!=null)o['a']=$.Account;
	if($.DevicePrivateKey!=null)o['k']=$.DevicePrivateKey.toString('base64');
	return o;
}
_.PublishingUrl=null;
_.Account=null;
_.DevicePrivateKey=null;

module.exports=LDCreateSubscriptionResponse;
