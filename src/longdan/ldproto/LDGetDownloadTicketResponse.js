var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobDownloadTicket = require('./LDBlobDownloadTicket');

function LDGetDownloadTicketResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['dt']!=null)$.BlobDownloadTicket=new LDBlobDownloadTicket(e['dt']);
}
LDGetDownloadTicketResponse.prototype=new LDJSONLoggable();
LDGetDownloadTicketResponse.prototype.constructor = LDGetDownloadTicketResponse;
var _=LDGetDownloadTicketResponse.prototype;
_.__type="LDGetDownloadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobDownloadTicket!=null)o['dt']=$.BlobDownloadTicket.encode();
	return o;
}
_.BlobDownloadTicket=null;

module.exports=LDGetDownloadTicketResponse;
