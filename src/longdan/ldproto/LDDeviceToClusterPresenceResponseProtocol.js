var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetPresencesResponse = require('./LDGetPresencesResponse');

function LDDeviceToClusterPresenceResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.GetPresencesResponse=new LDGetPresencesResponse(e['p']);
}
LDDeviceToClusterPresenceResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterPresenceResponseProtocol.prototype.constructor = LDDeviceToClusterPresenceResponseProtocol;
var _=LDDeviceToClusterPresenceResponseProtocol.prototype;
_.__type="LDDeviceToClusterPresenceResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetPresencesResponse!=null)o['p']=$.GetPresencesResponse.encode();
	return o;
}
_.GetPresencesResponse=null;

module.exports=LDDeviceToClusterPresenceResponseProtocol;
