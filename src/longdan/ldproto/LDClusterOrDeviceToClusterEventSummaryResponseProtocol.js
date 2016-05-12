var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGatherEventsByAppResponse = require('./LDGatherEventsByAppResponse');

function LDClusterOrDeviceToClusterEventSummaryResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ga']!=null)$.GatherEventsByAppResponse=new LDGatherEventsByAppResponse(e['ga']);
}
LDClusterOrDeviceToClusterEventSummaryResponseProtocol.prototype=new LDResponseProtocolBase();
LDClusterOrDeviceToClusterEventSummaryResponseProtocol.prototype.constructor = LDClusterOrDeviceToClusterEventSummaryResponseProtocol;
var _=LDClusterOrDeviceToClusterEventSummaryResponseProtocol.prototype;
_.__type="LDClusterOrDeviceToClusterEventSummaryResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GatherEventsByAppResponse!=null)o['ga']=$.GatherEventsByAppResponse.encode();
	return o;
}
_.GatherEventsByAppResponse=null;

module.exports=LDClusterOrDeviceToClusterEventSummaryResponseProtocol;
