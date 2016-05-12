var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDClientEvent = require('./LDClientEvent');

function LDEventReportRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['e']!=null){
		$.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)$.Events.push(new LDClientEvent(d[k]));
	}
}
LDEventReportRequest.prototype=new LDJSONLoggable();
LDEventReportRequest.prototype.constructor = LDEventReportRequest;
var _=LDEventReportRequest.prototype;
_.__type="LDEventReportRequest";
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
LDEventReportRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"R":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDEventReportRequest;
