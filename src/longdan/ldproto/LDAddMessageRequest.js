var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function LDAddMessageRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.Id=new LDTypedId(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Version=e['v'];
	$.AnyMemberWritable=e['w'];
	$.FromDevice=e['d'];
}
LDAddMessageRequest.prototype=new LDJSONLoggable();
LDAddMessageRequest.prototype.constructor = LDAddMessageRequest;
var _=LDAddMessageRequest.prototype;
_.__type="LDAddMessageRequest";
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
	if($.FromDevice!=null)o['d']=$.FromDevice;
	return o;
}
_.Feed=null;
_.Id=null;
_.Body=null;
_.Version=null;
_.AnyMemberWritable=null;
_.FromDevice=null;
LDAddMessageRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"a":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAddMessageRequest;
