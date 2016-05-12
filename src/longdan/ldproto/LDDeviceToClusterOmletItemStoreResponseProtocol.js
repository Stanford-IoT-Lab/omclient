var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDListApiKeysResponse = require('./LDListApiKeysResponse');
var LDGenerateApiKeyResponse = require('./LDGenerateApiKeyResponse');
var LDGenerateGrantForItemResponse = require('./LDGenerateGrantForItemResponse');
var LDListItemsResponse = require('./LDListItemsResponse');
var LDGetItemInfoResponse = require('./LDGetItemInfoResponse');

function LDDeviceToClusterOmletItemStoreResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetItemInfoResponse=new LDGetItemInfoResponse(e['g']);
	if(e['l']!=null)$.ListItemsResponse=new LDListItemsResponse(e['l']);
	if(e['gg']!=null)$.GenerateGrantForItemResponse=new LDGenerateGrantForItemResponse(e['gg']);
	if(e['gk']!=null)$.GenerateApiKeyResponse=new LDGenerateApiKeyResponse(e['gk']);
	if(e['lk']!=null)$.ListApiKeysResponse=new LDListApiKeysResponse(e['lk']);
}
LDDeviceToClusterOmletItemStoreResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterOmletItemStoreResponseProtocol.prototype.constructor = LDDeviceToClusterOmletItemStoreResponseProtocol;
var _=LDDeviceToClusterOmletItemStoreResponseProtocol.prototype;
_.__type="LDDeviceToClusterOmletItemStoreResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetItemInfoResponse!=null)o['g']=$.GetItemInfoResponse.encode();
	if($.ListItemsResponse!=null)o['l']=$.ListItemsResponse.encode();
	if($.GenerateGrantForItemResponse!=null)o['gg']=$.GenerateGrantForItemResponse.encode();
	if($.GenerateApiKeyResponse!=null)o['gk']=$.GenerateApiKeyResponse.encode();
	if($.ListApiKeysResponse!=null)o['lk']=$.ListApiKeysResponse.encode();
	return o;
}
_.GetItemInfoResponse=null;
_.ListItemsResponse=null;
_.GenerateGrantForItemResponse=null;
_.GenerateApiKeyResponse=null;
_.ListApiKeysResponse=null;

module.exports=LDDeviceToClusterOmletItemStoreResponseProtocol;
