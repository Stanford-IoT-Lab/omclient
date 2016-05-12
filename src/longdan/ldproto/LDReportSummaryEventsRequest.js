var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDClientEvent = require('./LDClientEvent');

function LDReportSummaryEventsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['e']!=null){
		$.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)$.Events.push(new LDClientEvent(d[k]));
	}
}
LDReportSummaryEventsRequest.prototype=new LDJSONLoggable();
LDReportSummaryEventsRequest.prototype.constructor = LDReportSummaryEventsRequest;
var _=LDReportSummaryEventsRequest.prototype;
_.__type="LDReportSummaryEventsRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Events!=null) {
		o['e']=[];
		var d=$.Events;
		for(var k=0;k<d.length;++k) o['e'].push(d[k].encode());
	}
	return o;
}
_.Events=null;
LDReportSummaryEventsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"r":o};o=t;
	t={"#":id,"es":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDReportSummaryEventsRequest;
