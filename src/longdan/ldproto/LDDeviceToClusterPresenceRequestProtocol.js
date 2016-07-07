var LDRequestProtocolBase = require('./LDRequestProtocolBase');
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
	return o;
}
_.GetPresencesRequest=null;
_.SetOnlineStatusRequest=null;
_.GetStreamingLinkRequest=null;
_.SetStreamingStatusRequest=null;
_.GetStreamsRequest=null;

module.exports=O;
