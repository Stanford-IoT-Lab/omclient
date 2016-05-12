var LDJSONLoggable = require('./LDJSONLoggable');

function LDInboxDeliveryTerminatedPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDInboxDeliveryTerminatedPush.prototype=new LDJSONLoggable();
LDInboxDeliveryTerminatedPush.prototype.constructor = LDInboxDeliveryTerminatedPush;
var _=LDInboxDeliveryTerminatedPush.prototype;
_.__type="LDInboxDeliveryTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}

module.exports=LDInboxDeliveryTerminatedPush;
