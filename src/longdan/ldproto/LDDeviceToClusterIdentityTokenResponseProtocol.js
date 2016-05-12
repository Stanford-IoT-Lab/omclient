var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetIdentityTokenResponse = require('./LDGetIdentityTokenResponse');

function LDDeviceToClusterIdentityTokenResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetIdentityTokenResponse=new LDGetIdentityTokenResponse(e['g']);
}
LDDeviceToClusterIdentityTokenResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterIdentityTokenResponseProtocol.prototype.constructor = LDDeviceToClusterIdentityTokenResponseProtocol;
var _=LDDeviceToClusterIdentityTokenResponseProtocol.prototype;
_.__type="LDDeviceToClusterIdentityTokenResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetIdentityTokenResponse!=null)o['g']=$.GetIdentityTokenResponse.encode();
	return o;
}
_.GetIdentityTokenResponse=null;

module.exports=LDDeviceToClusterIdentityTokenResponseProtocol;
