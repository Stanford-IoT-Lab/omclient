var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function LDOverwriteMessageRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.Id=new LDTypedId(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Version=e['v'];
	$.AnyMemberWritable=e['w'];
	if(e['m']!=null)$.Metadata=new Buffer(e['m'],'base64');
	$.FromDevice=e['d'];
}
LDOverwriteMessageRequest.prototype=new LDJSONLoggable();
LDOverwriteMessageRequest.prototype.constructor = LDOverwriteMessageRequest;
var _=LDOverwriteMessageRequest.prototype;
_.__type="LDOverwriteMessageRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.AnyMemberWritable!=null)o['w']=$.AnyMemberWritable;
	if($.Metadata!=null)o['m']=$.Metadata.toString('base64');
	if($.FromDevice!=null)o['d']=$.FromDevice;
	return o;
}
_.Feed=null;
_.Id=null;
_.Body=null;
_.Version=null;
_.AnyMemberWritable=null;
_.Metadata=null;
_.FromDevice=null;
LDOverwriteMessageRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"o":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDOverwriteMessageRequest;
