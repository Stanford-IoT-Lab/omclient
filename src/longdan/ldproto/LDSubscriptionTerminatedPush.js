var LDJSONLoggable = require('./LDJSONLoggable');

function LDSubscriptionTerminatedPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDSubscriptionTerminatedPush.prototype=new LDJSONLoggable();
LDSubscriptionTerminatedPush.prototype.constructor = LDSubscriptionTerminatedPush;
var _=LDSubscriptionTerminatedPush.prototype;
_.__type="LDSubscriptionTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}

module.exports=LDSubscriptionTerminatedPush;
