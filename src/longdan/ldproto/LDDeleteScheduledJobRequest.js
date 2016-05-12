var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDDeleteScheduledJobRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Cluster=e['c'];
	if(e['id']!=null)$.JobId=new Buffer(e['id'],'base64');
	$.JobIdAsRedisString=e['s'];
}
LDDeleteScheduledJobRequest.prototype=new LDJSONLoggable();
LDDeleteScheduledJobRequest.prototype.constructor = LDDeleteScheduledJobRequest;
var _=LDDeleteScheduledJobRequest.prototype;
_.__type="LDDeleteScheduledJobRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.JobId!=null)o['id']=$.JobId.toString('base64');
	if($.JobIdAsRedisString!=null)o['s']=$.JobIdAsRedisString;
	return o;
}
_.AdminAccount=null;
_.Cluster=null;
_.JobId=null;
_.JobIdAsRedisString=null;
LDDeleteScheduledJobRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"ds":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDDeleteScheduledJobRequest;
