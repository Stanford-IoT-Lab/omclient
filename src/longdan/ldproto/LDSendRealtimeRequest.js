var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDSendRealtimeRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Type=e['t'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
}
LDSendRealtimeRequest.prototype=new LDJSONLoggable();
LDSendRealtimeRequest.prototype.constructor = LDSendRealtimeRequest;
var _=LDSendRealtimeRequest.prototype;
_.__type="LDSendRealtimeRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Type!=null)o['t']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	return o;
}
_.Feed=null;
_.Type=null;
_.Body=null;
LDSendRealtimeRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"L":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSendRealtimeRequest;
