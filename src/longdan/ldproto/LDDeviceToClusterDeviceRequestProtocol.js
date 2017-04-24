var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDSetCampaignIdRequest = require('./LDSetCampaignIdRequest');
var LDSetDingTimeoutRequest = require('./LDSetDingTimeoutRequest');
var LDAddDeviceRequest = require('./LDAddDeviceRequest');
var LDDeleteDeviceRequest = require('./LDDeleteDeviceRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null)$.DeleteDeviceRequest=new LDDeleteDeviceRequest(e['d']);
	if(e['c']!=null)$.AddDeviceRequest=new LDAddDeviceRequest(e['c']);
	if(e['t']!=null)$.SetDingTimeoutRequest=new LDSetDingTimeoutRequest(e['t']);
	if(e['C']!=null)$.SetCampaignIdRequest=new LDSetCampaignIdRequest(e['C']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterDeviceRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.DeleteDeviceRequest!=null)o['d']=$.DeleteDeviceRequest.encode();
	if($.AddDeviceRequest!=null)o['c']=$.AddDeviceRequest.encode();
	if($.SetDingTimeoutRequest!=null)o['t']=$.SetDingTimeoutRequest.encode();
	if($.SetCampaignIdRequest!=null)o['C']=$.SetCampaignIdRequest.encode();
	return o;
}
_.DeleteDeviceRequest=null;
_.AddDeviceRequest=null;
_.SetDingTimeoutRequest=null;
_.SetCampaignIdRequest=null;

module.exports=O;
