var LDJSONLoggable = require('./LDJSONLoggable');

function LDRequestProtocolBase(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDRequestProtocolBase.prototype=new LDJSONLoggable();
LDRequestProtocolBase.prototype.constructor = LDRequestProtocolBase;
var _=LDRequestProtocolBase.prototype;
_.__type="LDRequestProtocolBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}

module.exports=LDRequestProtocolBase;
