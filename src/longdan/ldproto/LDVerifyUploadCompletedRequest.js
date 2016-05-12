var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobUploadTicket = require('./LDBlobUploadTicket');

function LDVerifyUploadCompletedRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.BlobUploadTicket=new LDBlobUploadTicket(e['ut']);
}
LDVerifyUploadCompletedRequest.prototype=new LDJSONLoggable();
LDVerifyUploadCompletedRequest.prototype.constructor = LDVerifyUploadCompletedRequest;
var _=LDVerifyUploadCompletedRequest.prototype;
_.__type="LDVerifyUploadCompletedRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobUploadTicket!=null)o['ut']=$.BlobUploadTicket.encode();
	return o;
}
_.BlobUploadTicket=null;
LDVerifyUploadCompletedRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"vc":o};o=t;
	t={"#":id,"b":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDVerifyUploadCompletedRequest;
