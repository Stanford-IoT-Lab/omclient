var LDJSONLoggable = require('./LDJSONLoggable');
var LDMessage = require('./LDMessage');

function LDMessageDeliveryPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new LDMessage(e['m']);
}
LDMessageDeliveryPush.prototype=new LDJSONLoggable();
LDMessageDeliveryPush.prototype.constructor = LDMessageDeliveryPush;
var _=LDMessageDeliveryPush.prototype;
_.__type="LDMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;

module.exports=LDMessageDeliveryPush;
