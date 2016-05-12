var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDFailureReportRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Failure=e['t'];
}
LDFailureReportRequest.prototype=new LDJSONLoggable();
LDFailureReportRequest.prototype.constructor = LDFailureReportRequest;
var _=LDFailureReportRequest.prototype;
_.__type="LDFailureReportRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Failure!=null)o['t']=$.Failure;
	return o;
}
_.Failure=null;
LDFailureReportRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"f":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDFailureReportRequest;
