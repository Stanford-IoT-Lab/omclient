var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetCloudConfigResponse = require('./LDGetCloudConfigResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetClientCloudConfigResponse=new LDGetCloudConfigResponse(e['g']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterCloudSyncResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetClientCloudConfigResponse!=null)o['g']=$.GetClientCloudConfigResponse.encode();
	return o;
}
_.GetClientCloudConfigResponse=null;

module.exports=O;
