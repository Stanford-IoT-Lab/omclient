var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetContactProfileResponse = require('./LDGetContactProfileResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactProfileResponse=new LDGetContactProfileResponse(e['c']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterAddressBookResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.ContactProfileResponse!=null)o['c']=$.ContactProfileResponse.encode();
	return o;
}
_.ContactProfileResponse=null;

module.exports=O;
