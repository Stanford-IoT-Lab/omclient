var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetIdentityTokenResponse = require('./LDGetIdentityTokenResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetIdentityTokenResponse=new LDGetIdentityTokenResponse(e['g']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterIdentityTokenResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetIdentityTokenResponse!=null)o['g']=$.GetIdentityTokenResponse.encode();
	return o;
}
_.GetIdentityTokenResponse=null;

module.exports=O;
