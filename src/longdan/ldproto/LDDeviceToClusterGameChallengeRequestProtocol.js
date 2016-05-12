var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDFindGamersGSRequest = require('./LDFindGamersGSRequest');
var LDOptInForGSChallengesRequest = require('./LDOptInForGSChallengesRequest');
var LDCheckAccountOptedInRequest = require('./LDCheckAccountOptedInRequest');
var LDExtendChallengeRequest = require('./LDExtendChallengeRequest');
var LDGameChallengeCompleteRequest = require('./LDGameChallengeCompleteRequest');
var LDUpdateChallengeLocationRequest = require('./LDUpdateChallengeLocationRequest');
var LDFindGamersRequest = require('./LDFindGamersRequest');
var LDOptInForAllGamesChallengesRequest = require('./LDOptInForAllGamesChallengesRequest');

function LDDeviceToClusterGameChallengeRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['o']!=null)$.OptInForAllGamesChallengesRequest=new LDOptInForAllGamesChallengesRequest(e['o']);
	if(e['f']!=null)$.FindGamers=new LDFindGamersRequest(e['f']);
	if(e['u']!=null)$.UpdateChallengeLocation=new LDUpdateChallengeLocationRequest(e['u']);
	if(e['d']!=null)$.GameChallengeComplete=new LDGameChallengeCompleteRequest(e['d']);
	if(e['c']!=null)$.GameChallenge=new LDExtendChallengeRequest(e['c']);
	if(e['co']!=null)$.CheckAccountOptedIn=new LDCheckAccountOptedInRequest(e['co']);
	if(e['ogs']!=null)$.OptInForGSChallengesRequest=new LDOptInForGSChallengesRequest(e['ogs']);
	if(e['fgs']!=null)$.FindGamersGSRequest=new LDFindGamersGSRequest(e['fgs']);
}
LDDeviceToClusterGameChallengeRequestProtocol.prototype=new LDRequestProtocolBase();
LDDeviceToClusterGameChallengeRequestProtocol.prototype.constructor = LDDeviceToClusterGameChallengeRequestProtocol;
var _=LDDeviceToClusterGameChallengeRequestProtocol.prototype;
_.__type="LDDeviceToClusterGameChallengeRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.OptInForAllGamesChallengesRequest!=null)o['o']=$.OptInForAllGamesChallengesRequest.encode();
	if($.FindGamers!=null)o['f']=$.FindGamers.encode();
	if($.UpdateChallengeLocation!=null)o['u']=$.UpdateChallengeLocation.encode();
	if($.GameChallengeComplete!=null)o['d']=$.GameChallengeComplete.encode();
	if($.GameChallenge!=null)o['c']=$.GameChallenge.encode();
	if($.CheckAccountOptedIn!=null)o['co']=$.CheckAccountOptedIn.encode();
	if($.OptInForGSChallengesRequest!=null)o['ogs']=$.OptInForGSChallengesRequest.encode();
	if($.FindGamersGSRequest!=null)o['fgs']=$.FindGamersGSRequest.encode();
	return o;
}
_.OptInForAllGamesChallengesRequest=null;
_.FindGamers=null;
_.UpdateChallengeLocation=null;
_.GameChallengeComplete=null;
_.GameChallenge=null;
_.CheckAccountOptedIn=null;
_.OptInForGSChallengesRequest=null;
_.FindGamersGSRequest=null;

module.exports=LDDeviceToClusterGameChallengeRequestProtocol;
