var LDJSONLoggable = require('./LDJSONLoggable');

function LDResponseProtocolBase(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDResponseProtocolBase.prototype=new LDJSONLoggable();
LDResponseProtocolBase.prototype.constructor = LDResponseProtocolBase;
var _=LDResponseProtocolBase.prototype;
_.__type="LDResponseProtocolBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}

module.exports=LDResponseProtocolBase;
