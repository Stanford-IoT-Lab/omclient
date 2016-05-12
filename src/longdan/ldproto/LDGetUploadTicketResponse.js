var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobUploadTicket = require('./LDBlobUploadTicket');

function LDGetUploadTicketResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.BlobUploadTicket=new LDBlobUploadTicket(e['ut']);
}
LDGetUploadTicketResponse.prototype=new LDJSONLoggable();
LDGetUploadTicketResponse.prototype.constructor = LDGetUploadTicketResponse;
var _=LDGetUploadTicketResponse.prototype;
_.__type="LDGetUploadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobUploadTicket!=null)o['ut']=$.BlobUploadTicket.encode();
	return o;
}
_.BlobUploadTicket=null;

module.exports=LDGetUploadTicketResponse;
