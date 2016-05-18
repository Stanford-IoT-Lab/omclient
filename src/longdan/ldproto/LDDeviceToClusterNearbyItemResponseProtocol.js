var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDFetchNearbyItemsResponse = require('./LDFetchNearbyItemsResponse');
var LDBroadcastItemResponse = require('./LDBroadcastItemResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.BroadcastItemResponse=new LDBroadcastItemResponse(e['b']);
	if(e['f']!=null)$.FetchNearbyItemsResponse=new LDFetchNearbyItemsResponse(e['f']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
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

module.exports=O;
