var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDStreamDeliveryTerminatedPush = require('./LDStreamDeliveryTerminatedPush');
var LDStreamDeliveryMessagePush = require('./LDStreamDeliveryMessagePush');
var LDUnsubscribeForStreamRequest = require('./LDUnsubscribeForStreamRequest');
var LDSubscribeForStreamRequest = require('./LDSubscribeForStreamRequest');
var LDStopRtmpTransformRequest = require('./LDStopRtmpTransformRequest');
var LDStartRtmpTransformRequest = require('./LDStartRtmpTransformRequest');
var LDListStreamLinksRequest = require('./LDListStreamLinksRequest');
var LDSetStreamingStatusRequest = require('./LDSetStreamingStatusRequest');
var LDGetStreamingLinkRequest = require('./LDGetStreamingLinkRequest');
var LDSetOnlineStatusRequest = require('./LDSetOnlineStatusRequest');
var LDGetPresencesRequest = require('./LDGetPresencesRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetPresencesRequest=new LDGetPresencesRequest(e['g']);
	if(e['o']!=null)$.SetOnlineStatusRequest=new LDSetOnlineStatusRequest(e['o']);
	if(e['s']!=null)$.GetStreamingLinkRequest=new LDGetStreamingLinkRequest(e['s']);
	if(e['ss']!=null)$.SetStreamingStatusRequest=new LDSetStreamingStatusRequest(e['ss']);
	if(e['l']!=null)$.GetStreamsRequest=new LDListStreamLinksRequest(e['l']);
	if(e['r']!=null)$.StartRtmpTransformRequest=new LDStartRtmpTransformRequest(e['r']);
	if(e['t']!=null)$.StopRtmpTransformRequest=new LDStopRtmpTransformRequest(e['t']);
	if(e['a']!=null)$.SubscribeForStreamRequest=new LDSubscribeForStreamRequest(e['a']);
	if(e['u']!=null)$.UnsubscribeForStreamRequest=new LDUnsubscribeForStreamRequest(e['u']);
	if(e['p']!=null)$.StreamPush=new LDStreamDeliveryMessagePush(e['p']);
	if(e['d']!=null)$.TerminatedPush=new LDStreamDeliveryTerminatedPush(e['d']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterPresenceRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetPresencesRequest!=null)o['g']=$.GetPresencesRequest.encode();
	if($.SetOnlineStatusRequest!=null)o['o']=$.SetOnlineStatusRequest.encode();
	if($.GetStreamingLinkRequest!=null)o['s']=$.GetStreamingLinkRequest.encode();
	if($.SetStreamingStatusRequest!=null)o['ss']=$.SetStreamingStatusRequest.encode();
	if($.GetStreamsRequest!=null)o['l']=$.GetStreamsRequest.encode();
	if($.StartRtmpTransformRequest!=null)o['r']=$.StartRtmpTransformRequest.encode();
	if($.StopRtmpTransformRequest!=null)o['t']=$.StopRtmpTransformRequest.encode();
	if($.SubscribeForStreamRequest!=null)o['a']=$.SubscribeForStreamRequest.encode();
	if($.UnsubscribeForStreamRequest!=null)o['u']=$.UnsubscribeForStreamRequest.encode();
	if($.StreamPush!=null)o['p']=$.StreamPush.encode();
	if($.TerminatedPush!=null)o['d']=$.TerminatedPush.encode();
	return o;
}
_.GetPresencesRequest=null;
_.SetOnlineStatusRequest=null;
_.GetStreamingLinkRequest=null;
_.SetStreamingStatusRequest=null;
_.GetStreamsRequest=null;
_.StartRtmpTransformRequest=null;
_.StopRtmpTransformRequest=null;
_.SubscribeForStreamRequest=null;
_.UnsubscribeForStreamRequest=null;
_.StreamPush=null;
_.TerminatedPush=null;

module.exports=O;
