var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDFetchNearbyItemsResponse = require('./LDFetchNearbyItemsResponse');
var LDBroadcastItemResponse = require('./LDBroadcastItemResponse');

function LDDeviceToClusterNearbyItemResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.BroadcastItemResponse=new LDBroadcastItemResponse(e['b']);
	if(e['f']!=null)$.FetchNearbyItemsResponse=new LDFetchNearbyItemsResponse(e['f']);
}
LDDeviceToClusterNearbyItemResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterNearbyItemResponseProtocol.prototype.constructor = LDDeviceToClusterNearbyItemResponseProtocol;
var _=LDDeviceToClusterNearbyItemResponseProtocol.prototype;
_.__type="LDDeviceToClusterNearbyItemResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.BroadcastItemResponse!=null)o['b']=$.BroadcastItemResponse.encode();
	if($.FetchNearbyItemsResponse!=null)o['f']=$.FetchNearbyItemsResponse.encode();
	return o;
}
_.BroadcastItemResponse=null;
_.FetchNearbyItemsResponse=null;

module.exports=LDDeviceToClusterNearbyItemResponseProtocol;
