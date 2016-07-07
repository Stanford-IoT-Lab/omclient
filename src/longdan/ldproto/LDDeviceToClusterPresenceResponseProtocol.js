var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDListStreamLinksResponse = require('./LDListStreamLinksResponse');
var LDGetPresencesResponse = require('./LDGetPresencesResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.GetPresencesResponse=new LDGetPresencesResponse(e['p']);
	if(e['l']!=null)$.LinksResponse=new LDListStreamLinksResponse(e['l']);
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
	if($.LinksResponse!=null)o['l']=$.LinksResponse.encode();
	return o;
}
_.GetPresencesResponse=null;
_.LinksResponse=null;

module.exports=O;
