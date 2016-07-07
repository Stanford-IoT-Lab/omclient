var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDSigninOrCreateGuestAccountResponse = require('./LDSigninOrCreateGuestAccountResponse');
var LDCheckSSOTokenResponse = require('./LDCheckSSOTokenResponse');
var LDGetSigninLinkResponse = require('./LDGetSigninLinkResponse');
var LDGetAppSigninLinkResponse = require('./LDGetAppSigninLinkResponse');
var LDGetLinkedIdentitiesResponse = require('./LDGetLinkedIdentitiesResponse');
var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AccountDetailsResponse=new LDAccountDetailsResponse(e['a']);
	if(e['i']!=null)$.GetLinkedIdentitiesResponse=new LDGetLinkedIdentitiesResponse(e['i']);
	if(e['s']!=null)$.GetAppSigninLinkResponse=new LDGetAppSigninLinkResponse(e['s']);
	if(e['S']!=null)$.GetSigninLinkResponse=new LDGetSigninLinkResponse(e['S']);
	if(e['c']!=null)$.CheckSSOTokenResponse=new LDCheckSSOTokenResponse(e['c']);
	if(e['sc']!=null)$.SigninOrCreateGuestAccountResponse=new LDSigninOrCreateGuestAccountResponse(e['sc']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
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
	if($.SigninOrCreateGuestAccountResponse!=null)o['sc']=$.SigninOrCreateGuestAccountResponse.encode();
	return o;
}
_.AccountDetailsResponse=null;
_.GetLinkedIdentitiesResponse=null;
_.GetAppSigninLinkResponse=null;
_.GetSigninLinkResponse=null;
_.CheckSSOTokenResponse=null;
_.SigninOrCreateGuestAccountResponse=null;

module.exports=O;
