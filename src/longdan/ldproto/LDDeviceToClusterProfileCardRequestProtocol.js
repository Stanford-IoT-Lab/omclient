var LDRequestProtocolBase = require('./LDRequestProtocolBase');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterProfileCardRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	return o;
}

module.exports=O;
