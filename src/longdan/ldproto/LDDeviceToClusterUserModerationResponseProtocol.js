var LDResponseProtocolBase = require('./LDResponseProtocolBase');

function LDDeviceToClusterUserModerationResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
}
LDDeviceToClusterUserModerationResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterUserModerationResponseProtocol.prototype.constructor = LDDeviceToClusterUserModerationResponseProtocol;
var _=LDDeviceToClusterUserModerationResponseProtocol.prototype;
_.__type="LDDeviceToClusterUserModerationResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	return o;
}

module.exports=LDDeviceToClusterUserModerationResponseProtocol;
