var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDGatherEventsByAppRequest = require('./LDGatherEventsByAppRequest');
var LDReportSummaryEventsRequest = require('./LDReportSummaryEventsRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null)$.ReportSummaryEventsRequest=new LDReportSummaryEventsRequest(e['r']);
	if(e['ga']!=null)$.GatherEventsByAppRequest=new LDGatherEventsByAppRequest(e['ga']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDClusterOrDeviceToClusterEventSummaryRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.ReportSummaryEventsRequest!=null)o['r']=$.ReportSummaryEventsRequest.encode();
	if($.GatherEventsByAppRequest!=null)o['ga']=$.GatherEventsByAppRequest.encode();
	return o;
}
_.ReportSummaryEventsRequest=null;
_.GatherEventsByAppRequest=null;

module.exports=O;
