var LDRequestProtocolBase = require('./LDRequestProtocolBase');

function LDDeviceToClusterProfileCardRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
}
LDDeviceToClusterProfileCardRequestProtocol.prototype=new LDRequestProtocolBase();
LDDeviceToClusterProfileCardRequestProtocol.prototype.constructor = LDDeviceToClusterProfileCardRequestProtocol;
var _=LDDeviceToClusterProfileCardRequestProtocol.prototype;
_.__type="LDDeviceToClusterProfileCardRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	return o;
}

module.exports=LDDeviceToClusterProfileCardRequestProtocol;
