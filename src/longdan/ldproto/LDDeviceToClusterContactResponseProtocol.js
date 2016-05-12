var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetContactDetailsResponse = require('./LDGetContactDetailsResponse');

function LDDeviceToClusterContactResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactDetailsResponse=new LDGetContactDetailsResponse(e['c']);
}
LDDeviceToClusterContactResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterContactResponseProtocol.prototype.constructor = LDDeviceToClusterContactResponseProtocol;
var _=LDDeviceToClusterContactResponseProtocol.prototype;
_.__type="LDDeviceToClusterContactResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.ContactDetailsResponse!=null)o['c']=$.ContactDetailsResponse.encode();
	return o;
}
_.ContactDetailsResponse=null;

module.exports=LDDeviceToClusterContactResponseProtocol;
