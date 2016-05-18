var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDGetIdentityTokenRequest = require('./LDGetIdentityTokenRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetIdentityTokenRequest=new LDGetIdentityTokenRequest(e['g']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterIdentityTokenRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetIdentityTokenRequest!=null)o['g']=$.GetIdentityTokenRequest.encode();
	return o;
}
_.GetIdentityTokenRequest=null;

module.exports=O;
