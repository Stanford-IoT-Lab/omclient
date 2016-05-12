var LDResponseProtocolBase = require('./LDResponseProtocolBase');

function LDDeviceToClusterProfileCardResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
}
LDDeviceToClusterProfileCardResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterProfileCardResponseProtocol.prototype.constructor = LDDeviceToClusterProfileCardResponseProtocol;
var _=LDDeviceToClusterProfileCardResponseProtocol.prototype;
_.__type="LDDeviceToClusterProfileCardResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	return o;
}

module.exports=LDDeviceToClusterProfileCardResponseProtocol;
