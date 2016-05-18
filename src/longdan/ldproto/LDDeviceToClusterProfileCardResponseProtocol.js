var LDResponseProtocolBase = require('./LDResponseProtocolBase');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterProfileCardResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	return o;
}

module.exports=O;
