var LDGatherEventsByAppResponse = require('./LDGatherEventsByAppResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function LDGatherEventsByAppRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.ItemId=new LDItemId(e['a']);
	$.PackageId=e['p'];
	$.Start=e['s'];
	$.End=e['e'];
	$.Zoom=e['z'];
}
LDGatherEventsByAppRequest.prototype=new LDJSONLoggable();
LDGatherEventsByAppRequest.prototype.constructor = LDGatherEventsByAppRequest;
var _=LDGatherEventsByAppRequest.prototype;
_.__type="LDGatherEventsByAppRequest";
_.__rt=LDGatherEventsByAppResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemId!=null)o['a']=$.ItemId.encode();
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Start!=null)o['s']=$.Start;
	if($.End!=null)o['e']=$.End;
	if($.Zoom!=null)o['z']=$.Zoom;
	return o;
}
_.ItemId=null;
_.PackageId=null;
_.Start=null;
_.End=null;
_.Zoom=null;
LDGatherEventsByAppRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ga":o};o=t;
	t={"#":id,"es":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGatherEventsByAppRequest;
