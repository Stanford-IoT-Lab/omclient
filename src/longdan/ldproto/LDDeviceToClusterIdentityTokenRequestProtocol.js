var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDGetIdentityTokenRequest = require('./LDGetIdentityTokenRequest');

function LDDeviceToClusterIdentityTokenRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetIdentityTokenRequest=new LDGetIdentityTokenRequest(e['g']);
}
LDDeviceToClusterIdentityTokenRequestProtocol.prototype=new LDRequestProtocolBase();
LDDeviceToClusterIdentityTokenRequestProtocol.prototype.constructor = LDDeviceToClusterIdentityTokenRequestProtocol;
var _=LDDeviceToClusterIdentityTokenRequestProtocol.prototype;
_.__type="LDDeviceToClusterIdentityTokenRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetIdentityTokenRequest!=null)o['g']=$.GetIdentityTokenRequest.encode();
	return o;
}
_.GetIdentityTokenRequest=null;

module.exports=LDDeviceToClusterIdentityTokenRequestProtocol;
