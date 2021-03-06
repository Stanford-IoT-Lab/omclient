var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDSetSmsParticipationRequest = require('./LDSetSmsParticipationRequest');
var LDSendDirectMessageRequest = require('./LDSendDirectMessageRequest');
var LDGetDirectFeedRequest = require('./LDGetDirectFeedRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['sf']!=null)$.GetSmsFeedRequest=new LDGetDirectFeedRequest(e['sf']);
	if(e['sm']!=null)$.SendSmsMessageRequest=new LDSendDirectMessageRequest(e['sm']);
	if(e['sp']!=null)$.SetSmsParticipationRequest=new LDSetSmsParticipationRequest(e['sp']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterDirectMessagingRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetSmsFeedRequest!=null)o['sf']=$.GetSmsFeedRequest.encode();
	if($.SendSmsMessageRequest!=null)o['sm']=$.SendSmsMessageRequest.encode();
	if($.SetSmsParticipationRequest!=null)o['sp']=$.SetSmsParticipationRequest.encode();
	return o;
}
_.GetSmsFeedRequest=null;
_.SendSmsMessageRequest=null;
_.SetSmsParticipationRequest=null;

module.exports=O;
