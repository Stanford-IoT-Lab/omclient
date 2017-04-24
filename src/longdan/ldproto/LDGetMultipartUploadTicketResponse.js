var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobUploadTicket = require('./LDBlobUploadTicket');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null){
		$.BlobUploadTickets=[];
		var d = e['ut'];
		for(var k=0; k<d.length;++k)$.BlobUploadTickets.push(new LDBlobUploadTicket(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetMultipartUploadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobUploadTickets!=null) {
		o['ut']=[];
		var d=$.BlobUploadTickets;
		for(var k=0;k<d.length;++k) o['ut'].push(d[k].encode());
	}
	return o;
}
_.BlobUploadTickets=null;

module.exports=O;
