var LDGetDownloadTicketResponse = require('./LDGetDownloadTicketResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetDownloadTicketRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['l'];
	$.PreferInsecure=e['e'];
}
LDGetDownloadTicketRequest.prototype=new LDJSONLoggable();
LDGetDownloadTicketRequest.prototype.constructor = LDGetDownloadTicketRequest;
var _=LDGetDownloadTicketRequest.prototype;
_.__type="LDGetDownloadTicketRequest";
_.__rt=LDGetDownloadTicketResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['l']=$.BlobLinkString;
	if($.PreferInsecure!=null)o['e']=$.PreferInsecure;
	return o;
}
_.BlobLinkString=null;
_.PreferInsecure=null;
LDGetDownloadTicketRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"dt":o};o=t;
	t={"#":id,"b":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetDownloadTicketRequest;
