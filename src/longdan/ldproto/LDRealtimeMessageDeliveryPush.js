var LDJSONLoggable = require('./LDJSONLoggable');
var LDRealtimeMessage = require('./LDRealtimeMessage');

function LDRealtimeMessageDeliveryPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new LDRealtimeMessage(e['m']);
}
LDRealtimeMessageDeliveryPush.prototype=new LDJSONLoggable();
LDRealtimeMessageDeliveryPush.prototype.constructor = LDRealtimeMessageDeliveryPush;
var _=LDRealtimeMessageDeliveryPush.prototype;
_.__type="LDRealtimeMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;

module.exports=LDRealtimeMessageDeliveryPush;
