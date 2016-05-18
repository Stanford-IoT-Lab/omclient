var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobDownloadTicket = require('./LDBlobDownloadTicket');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['dt']!=null)$.BlobDownloadTicket=new LDBlobDownloadTicket(e['dt']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetDownloadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobDownloadTicket!=null)o['dt']=$.BlobDownloadTicket.encode();
	return o;
}
_.BlobDownloadTicket=null;

module.exports=O;
