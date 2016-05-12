var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDSubscriptionTerminatedPush = require('./LDSubscriptionTerminatedPush');
var LDItemBroadcastStateChangedPush = require('./LDItemBroadcastStateChangedPush');
var LDFetchNearbyItemsRequest = require('./LDFetchNearbyItemsRequest');
var LDUnsubscribeForNearbyItemsRequest = require('./LDUnsubscribeForNearbyItemsRequest');
var LDSubscribeForNearbyItemsRequest = require('./LDSubscribeForNearbyItemsRequest');
var LDUnbroadcastItemRequest = require('./LDUnbroadcastItemRequest');
var LDBroadcastItemRequest = require('./LDBroadcastItemRequest');

function LDDeviceToClusterNearbyItemRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.BroadcastItemRequest=new LDBroadcastItemRequest(e['b']);
	if(e['ub']!=null)$.UnbroadcastItemRequest=new LDUnbroadcastItemRequest(e['ub']);
	if(e['s']!=null)$.SubscribeForNearbyItemsRequest=new LDSubscribeForNearbyItemsRequest(e['s']);
	if(e['us']!=null)$.UnsubscribeForNearbyItemsRequest=new LDUnsubscribeForNearbyItemsRequest(e['us']);
	if(e['f']!=null)$.FetchNearbyItemsRequest=new LDFetchNearbyItemsRequest(e['f']);
	if(e['bp']!=null)$.ItemBroadcastStateChangedPush=new LDItemBroadcastStateChangedPush(e['bp']);
	if(e['st']!=null)$.SubscriptionTerminatedPush=new LDSubscriptionTerminatedPush(e['st']);
}
LDDeviceToClusterNearbyItemRequestProtocol.prototype=new LDRequestProtocolBase();
LDDeviceToClusterNearbyItemRequestProtocol.prototype.constructor = LDDeviceToClusterNearbyItemRequestProtocol;
var _=LDDeviceToClusterNearbyItemRequestProtocol.prototype;
_.__type="LDDeviceToClusterNearbyItemRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.BroadcastItemRequest!=null)o['b']=$.BroadcastItemRequest.encode();
	if($.UnbroadcastItemRequest!=null)o['ub']=$.UnbroadcastItemRequest.encode();
	if($.SubscribeForNearbyItemsRequest!=null)o['s']=$.SubscribeForNearbyItemsRequest.encode();
	if($.UnsubscribeForNearbyItemsRequest!=null)o['us']=$.UnsubscribeForNearbyItemsRequest.encode();
	if($.FetchNearbyItemsRequest!=null)o['f']=$.FetchNearbyItemsRequest.encode();
	if($.ItemBroadcastStateChangedPush!=null)o['bp']=$.ItemBroadcastStateChangedPush.encode();
	if($.SubscriptionTerminatedPush!=null)o['st']=$.SubscriptionTerminatedPush.encode();
	return o;
}
_.BroadcastItemRequest=null;
_.UnbroadcastItemRequest=null;
_.SubscribeForNearbyItemsRequest=null;
_.UnsubscribeForNearbyItemsRequest=null;
_.FetchNearbyItemsRequest=null;
_.ItemBroadcastStateChangedPush=null;
_.SubscriptionTerminatedPush=null;

module.exports=LDDeviceToClusterNearbyItemRequestProtocol;
