var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDDeviceRegistrationStateChangedPush = require('./LDDeviceRegistrationStateChangedPush');
var LDGetSigninLinkForGuestRequest = require('./LDGetSigninLinkForGuestRequest');
var LDSigninOrCreateGuestAccountRequest = require('./LDSigninOrCreateGuestAccountRequest');
var LDConfirmSSOTokenRequest = require('./LDConfirmSSOTokenRequest');
var LDCheckSSOTokenRequest = require('./LDCheckSSOTokenRequest');
var LDGetSSOTokenRequest = require('./LDGetSSOTokenRequest');
var LDConfirmSigninCodeRequest = require('./LDConfirmSigninCodeRequest');
var LDGetCheckSigninLinkRequest = require('./LDGetCheckSigninLinkRequest');
var LDGetSigninLinkRequest = require('./LDGetSigninLinkRequest');
var LDConfirmAuthCodeRequest = require('./LDConfirmAuthCodeRequest');
var LDGetAppSigninLinkRequest = require('./LDGetAppSigninLinkRequest');
var LDLinkOmletIdentityRequest = require('./LDLinkOmletIdentityRequest');
var LDUnlinkIdentityRequest = require('./LDUnlinkIdentityRequest');
var LDCheckIdentityLinkedRequest = require('./LDCheckIdentityLinkedRequest');
var LDGetLinkedIdentitiesRequest = require('./LDGetLinkedIdentitiesRequest');
var LDRegisterWithOAuthRequest = require('./LDRegisterWithOAuthRequest');
var LDConfirmTokenRequest = require('./LDConfirmTokenRequest');
var LDRegisterWithTokenRequest = require('./LDRegisterWithTokenRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null)$.RegisterWithTokenRequest=new LDRegisterWithTokenRequest(e['r']);
	if(e['c']!=null)$.ConfirmTokenRequest=new LDConfirmTokenRequest(e['c']);
	if(e['o']!=null)$.RegisterWithOAuthRequest=new LDRegisterWithOAuthRequest(e['o']);
	if(e['i']!=null)$.GetLinkedIdentitiesRequest=new LDGetLinkedIdentitiesRequest(e['i']);
	if(e['l']!=null)$.CheckLinkedIdentityRequest=new LDCheckIdentityLinkedRequest(e['l']);
	if(e['u']!=null)$.UnlinkIdentityRequest=new LDUnlinkIdentityRequest(e['u']);
	if(e['O']!=null)$.LinkOmletIdentityRequest=new LDLinkOmletIdentityRequest(e['O']);
	if(e['s']!=null)$.GetAppSigninLinkRequest=new LDGetAppSigninLinkRequest(e['s']);
	if(e['C']!=null)$.ConfirmAuthCodeRequest=new LDConfirmAuthCodeRequest(e['C']);
	if(e['S']!=null)$.GetSigninLinkRequest=new LDGetSigninLinkRequest(e['S']);
	if(e['csl']!=null)$.GetCheckSigninLinkRequest=new LDGetCheckSigninLinkRequest(e['csl']);
	if(e['cc']!=null)$.ConfirmSigninCodeRequest=new LDConfirmSigninCodeRequest(e['cc']);
	if(e['so']!=null)$.GetSSOTokenRequest=new LDGetSSOTokenRequest(e['so']);
	if(e['cs']!=null)$.CheckSSOTokenRequest=new LDCheckSSOTokenRequest(e['cs']);
	if(e['ao']!=null)$.ConfirmSSOTokenRequest=new LDConfirmSSOTokenRequest(e['ao']);
	if(e['sc']!=null)$.SigninOrCreateGuestAccountRequest=new LDSigninOrCreateGuestAccountRequest(e['sc']);
	if(e['gs']!=null)$.GetSigninLinkForGuestRequest=new LDGetSigninLinkForGuestRequest(e['gs']);
	if(e['dp']!=null)$.DeviceRegistrationStateChangedPush=new LDDeviceRegistrationStateChangedPush(e['dp']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToIdpSignupRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.RegisterWithTokenRequest!=null)o['r']=$.RegisterWithTokenRequest.encode();
	if($.ConfirmTokenRequest!=null)o['c']=$.ConfirmTokenRequest.encode();
	if($.RegisterWithOAuthRequest!=null)o['o']=$.RegisterWithOAuthRequest.encode();
	if($.GetLinkedIdentitiesRequest!=null)o['i']=$.GetLinkedIdentitiesRequest.encode();
	if($.CheckLinkedIdentityRequest!=null)o['l']=$.CheckLinkedIdentityRequest.encode();
	if($.UnlinkIdentityRequest!=null)o['u']=$.UnlinkIdentityRequest.encode();
	if($.LinkOmletIdentityRequest!=null)o['O']=$.LinkOmletIdentityRequest.encode();
	if($.GetAppSigninLinkRequest!=null)o['s']=$.GetAppSigninLinkRequest.encode();
	if($.ConfirmAuthCodeRequest!=null)o['C']=$.ConfirmAuthCodeRequest.encode();
	if($.GetSigninLinkRequest!=null)o['S']=$.GetSigninLinkRequest.encode();
	if($.GetCheckSigninLinkRequest!=null)o['csl']=$.GetCheckSigninLinkRequest.encode();
	if($.ConfirmSigninCodeRequest!=null)o['cc']=$.ConfirmSigninCodeRequest.encode();
	if($.GetSSOTokenRequest!=null)o['so']=$.GetSSOTokenRequest.encode();
	if($.CheckSSOTokenRequest!=null)o['cs']=$.CheckSSOTokenRequest.encode();
	if($.ConfirmSSOTokenRequest!=null)o['ao']=$.ConfirmSSOTokenRequest.encode();
	if($.SigninOrCreateGuestAccountRequest!=null)o['sc']=$.SigninOrCreateGuestAccountRequest.encode();
	if($.GetSigninLinkForGuestRequest!=null)o['gs']=$.GetSigninLinkForGuestRequest.encode();
	if($.DeviceRegistrationStateChangedPush!=null)o['dp']=$.DeviceRegistrationStateChangedPush.encode();
	return o;
}
_.RegisterWithTokenRequest=null;
_.ConfirmTokenRequest=null;
_.RegisterWithOAuthRequest=null;
_.GetLinkedIdentitiesRequest=null;
_.CheckLinkedIdentityRequest=null;
_.UnlinkIdentityRequest=null;
_.LinkOmletIdentityRequest=null;
_.GetAppSigninLinkRequest=null;
_.ConfirmAuthCodeRequest=null;
_.GetSigninLinkRequest=null;
_.GetCheckSigninLinkRequest=null;
_.ConfirmSigninCodeRequest=null;
_.GetSSOTokenRequest=null;
_.CheckSSOTokenRequest=null;
_.ConfirmSSOTokenRequest=null;
_.SigninOrCreateGuestAccountRequest=null;
_.GetSigninLinkForGuestRequest=null;
_.DeviceRegistrationStateChangedPush=null;

module.exports=O;
