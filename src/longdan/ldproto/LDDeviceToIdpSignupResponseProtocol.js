var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDCheckSSOTokenResponse = require('./LDCheckSSOTokenResponse');
var LDGetSigninLinkResponse = require('./LDGetSigninLinkResponse');
var LDGetAppSigninLinkResponse = require('./LDGetAppSigninLinkResponse');
var LDGetLinkedIdentitiesResponse = require('./LDGetLinkedIdentitiesResponse');
var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');

function LDDeviceToIdpSignupResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AccountDetailsResponse=new LDAccountDetailsResponse(e['a']);
	if(e['i']!=null)$.GetLinkedIdentitiesResponse=new LDGetLinkedIdentitiesResponse(e['i']);
	if(e['s']!=null)$.GetAppSigninLinkResponse=new LDGetAppSigninLinkResponse(e['s']);
	if(e['S']!=null)$.GetSigninLinkResponse=new LDGetSigninLinkResponse(e['S']);
	if(e['c']!=null)$.CheckSSOTokenResponse=new LDCheckSSOTokenResponse(e['c']);
}
LDDeviceToIdpSignupResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToIdpSignupResponseProtocol.prototype.constructor = LDDeviceToIdpSignupResponseProtocol;
var _=LDDeviceToIdpSignupResponseProtocol.prototype;
_.__type="LDDeviceToIdpSignupResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.AccountDetailsResponse!=null)o['a']=$.AccountDetailsResponse.encode();
	if($.GetLinkedIdentitiesResponse!=null)o['i']=$.GetLinkedIdentitiesResponse.encode();
	if($.GetAppSigninLinkResponse!=null)o['s']=$.GetAppSigninLinkResponse.encode();
	if($.GetSigninLinkResponse!=null)o['S']=$.GetSigninLinkResponse.encode();
	if($.CheckSSOTokenResponse!=null)o['c']=$.CheckSSOTokenResponse.encode();
	return o;
}
_.AccountDetailsResponse=null;
_.GetLinkedIdentitiesResponse=null;
_.GetAppSigninLinkResponse=null;
_.GetSigninLinkResponse=null;
_.CheckSSOTokenResponse=null;

module.exports=LDDeviceToIdpSignupResponseProtocol;
