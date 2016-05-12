var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function LDUpdateMessageRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.Id=new LDTypedId(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.AnyMemberWritable=e['w'];
	$.OldVersion=e['o'];
	$.NewVersion=e['n'];
	$.FromDevice=e['d'];
}
LDUpdateMessageRequest.prototype=new LDJSONLoggable();
LDUpdateMessageRequest.prototype.constructor = LDUpdateMessageRequest;
var _=LDUpdateMessageRequest.prototype;
_.__type="LDUpdateMessageRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.AnyMemberWritable!=null)o['w']=$.AnyMemberWritable;
	if($.OldVersion!=null)o['o']=$.OldVersion;
	if($.NewVersion!=null)o['n']=$.NewVersion;
	if($.FromDevice!=null)o['d']=$.FromDevice;
	return o;
}
_.Feed=null;
_.Id=null;
_.Body=null;
_.AnyMemberWritable=null;
_.OldVersion=null;
_.NewVersion=null;
_.FromDevice=null;
LDUpdateMessageRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUpdateMessageRequest;
