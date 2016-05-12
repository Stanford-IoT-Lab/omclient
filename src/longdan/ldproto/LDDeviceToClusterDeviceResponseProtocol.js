var LDResponseProtocolBase = require('./LDResponseProtocolBase');

function LDDeviceToClusterDeviceResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
}
LDDeviceToClusterDeviceResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterDeviceResponseProtocol.prototype.constructor = LDDeviceToClusterDeviceResponseProtocol;
var _=LDDeviceToClusterDeviceResponseProtocol.prototype;
_.__type="LDDeviceToClusterDeviceResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	return o;
}

module.exports=LDDeviceToClusterDeviceResponseProtocol;
