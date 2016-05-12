var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDDisconnectCloudSyncRequest = require('./LDDisconnectCloudSyncRequest');
var LDRefreshCloudConfigRequest = require('./LDRefreshCloudConfigRequest');
var LDSetCloudConfigRequest = require('./LDSetCloudConfigRequest');
var LDGetCloudConfigRequest = require('./LDGetCloudConfigRequest');

function LDDeviceToClusterCloudSyncRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetCloudConfigRequest=new LDGetCloudConfigRequest(e['g']);
	if(e['s']!=null)$.SetCloudConfigRequest=new LDSetCloudConfigRequest(e['s']);
	if(e['r']!=null)$.RefreshCloudConfigRequest=new LDRefreshCloudConfigRequest(e['r']);
	if(e['d']!=null)$.DisconnectCloudSyncRequest=new LDDisconnectCloudSyncRequest(e['d']);
}
LDDeviceToClusterCloudSyncRequestProtocol.prototype=new LDRequestProtocolBase();
LDDeviceToClusterCloudSyncRequestProtocol.prototype.constructor = LDDeviceToClusterCloudSyncRequestProtocol;
var _=LDDeviceToClusterCloudSyncRequestProtocol.prototype;
_.__type="LDDeviceToClusterCloudSyncRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetCloudConfigRequest!=null)o['g']=$.GetCloudConfigRequest.encode();
	if($.SetCloudConfigRequest!=null)o['s']=$.SetCloudConfigRequest.encode();
	if($.RefreshCloudConfigRequest!=null)o['r']=$.RefreshCloudConfigRequest.encode();
	if($.DisconnectCloudSyncRequest!=null)o['d']=$.DisconnectCloudSyncRequest.encode();
	return o;
}
_.GetCloudConfigRequest=null;
_.SetCloudConfigRequest=null;
_.RefreshCloudConfigRequest=null;
_.DisconnectCloudSyncRequest=null;

module.exports=LDDeviceToClusterCloudSyncRequestProtocol;
