var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetPresencesResponse = require('./LDGetPresencesResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.GetPresencesResponse=new LDGetPresencesResponse(e['p']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterPresenceResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetPresencesResponse!=null)o['p']=$.GetPresencesResponse.encode();
	return o;
}
_.GetPresencesResponse=null;

module.exports=O;
