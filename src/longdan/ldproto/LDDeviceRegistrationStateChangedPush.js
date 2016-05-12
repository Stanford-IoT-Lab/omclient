var LDJSONLoggable = require('./LDJSONLoggable');

function LDDeviceRegistrationStateChangedPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDDeviceRegistrationStateChangedPush.prototype=new LDJSONLoggable();
LDDeviceRegistrationStateChangedPush.prototype.constructor = LDDeviceRegistrationStateChangedPush;
var _=LDDeviceRegistrationStateChangedPush.prototype;
_.__type="LDDeviceRegistrationStateChangedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}

module.exports=LDDeviceRegistrationStateChangedPush;
