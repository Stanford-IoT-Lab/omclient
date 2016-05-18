var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDSetAppleBadgeCountRequest = require('./LDSetAppleBadgeCountRequest');
var LDInboxDeliveryTerminatedPush = require('./LDInboxDeliveryTerminatedPush');
var LDInboxDeliveryMessagePush = require('./LDInboxDeliveryMessagePush');
var LDRegisterPushNotificationKeyRequest = require('./LDRegisterPushNotificationKeyRequest');
var LDUnsubscribeForAccountInboxRequest = require('./LDUnsubscribeForAccountInboxRequest');
var LDSubscribeForAccountInboxRequest = require('./LDSubscribeForAccountInboxRequest');
var LDGetDirtyFeedsRequest = require('./LDGetDirtyFeedsRequest');
var LDSetFeedAcceptanceRequest = require('./LDSetFeedAcceptanceRequest');
var LDGetFeedStateRequest = require('./LDGetFeedStateRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['s']!=null)$.GetFeedState=new LDGetFeedStateRequest(e['s']);
	if(e['a']!=null)$.SetFeedAcceptance=new LDSetFeedAcceptanceRequest(e['a']);
	if(e['d']!=null)$.GetDirtyFeeds=new LDGetDirtyFeedsRequest(e['d']);
	if(e['S']!=null)$.SubscribeAccount=new LDSubscribeForAccountInboxRequest(e['S']);
	if(e['U']!=null)$.UnsubscribeAccount=new LDUnsubscribeForAccountInboxRequest(e['U']);
	if(e['r']!=null)$.RegisterPushNotificationKey=new LDRegisterPushNotificationKeyRequest(e['r']);
	if(e['m']!=null)$.MessagePush=new LDInboxDeliveryMessagePush(e['m']);
	if(e['t']!=null)$.TerminatedPush=new LDInboxDeliveryTerminatedPush(e['t']);
	if(e['b']!=null)$.SetAppleBadgeCount=new LDSetAppleBadgeCountRequest(e['b']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterInboxRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetFeedState!=null)o['s']=$.GetFeedState.encode();
	if($.SetFeedAcceptance!=null)o['a']=$.SetFeedAcceptance.encode();
	if($.GetDirtyFeeds!=null)o['d']=$.GetDirtyFeeds.encode();
	if($.SubscribeAccount!=null)o['S']=$.SubscribeAccount.encode();
	if($.UnsubscribeAccount!=null)o['U']=$.UnsubscribeAccount.encode();
	if($.RegisterPushNotificationKey!=null)o['r']=$.RegisterPushNotificationKey.encode();
	if($.MessagePush!=null)o['m']=$.MessagePush.encode();
	if($.TerminatedPush!=null)o['t']=$.TerminatedPush.encode();
	if($.SetAppleBadgeCount!=null)o['b']=$.SetAppleBadgeCount.encode();
	return o;
}
_.GetFeedState=null;
_.SetFeedAcceptance=null;
_.GetDirtyFeeds=null;
_.SubscribeAccount=null;
_.UnsubscribeAccount=null;
_.RegisterPushNotificationKey=null;
_.MessagePush=null;
_.TerminatedPush=null;
_.SetAppleBadgeCount=null;

module.exports=O;
