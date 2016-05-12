var LDJSONLoggable = require('./LDJSONLoggable');
var LDMessage = require('./LDMessage');

function LDInboxDeliveryMessagePush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new LDMessage(e['m']);
}
LDInboxDeliveryMessagePush.prototype=new LDJSONLoggable();
LDInboxDeliveryMessagePush.prototype.constructor = LDInboxDeliveryMessagePush;
var _=LDInboxDeliveryMessagePush.prototype;
_.__type="LDInboxDeliveryMessagePush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;

module.exports=LDInboxDeliveryMessagePush;
