var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobUploadTicket = require('./LDBlobUploadTicket');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.BlobUploadTicket=new LDBlobUploadTicket(e['ut']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetUploadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobUploadTicket!=null)o['ut']=$.BlobUploadTicket.encode();
	return o;
}
_.BlobUploadTicket=null;

module.exports=O;
