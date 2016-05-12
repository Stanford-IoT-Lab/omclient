var LDJSONLoggable = require('./LDJSONLoggable');
var LDMessage = require('./LDMessage');

function LDPublicChatMessageDeliveryPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new LDMessage(e['m']);
}
LDPublicChatMessageDeliveryPush.prototype=new LDJSONLoggable();
LDPublicChatMessageDeliveryPush.prototype.constructor = LDPublicChatMessageDeliveryPush;
var _=LDPublicChatMessageDeliveryPush.prototype;
_.__type="LDPublicChatMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;

module.exports=LDPublicChatMessageDeliveryPush;
