var LDJSONLoggable = require('./LDJSONLoggable');

function LDSynchronizedMessageBody(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDSynchronizedMessageBody.prototype=new LDJSONLoggable();
LDSynchronizedMessageBody.prototype.constructor = LDSynchronizedMessageBody;
var _=LDSynchronizedMessageBody.prototype;
_.__type="LDSynchronizedMessageBody";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}

module.exports=LDSynchronizedMessageBody;
