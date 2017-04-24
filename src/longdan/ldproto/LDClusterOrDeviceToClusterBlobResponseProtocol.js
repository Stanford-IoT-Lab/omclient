var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetDownloadTicketResponse = require('./LDGetDownloadTicketResponse');
var LDGetMultipartUploadTicketResponse = require('./LDGetMultipartUploadTicketResponse');
var LDGetUploadTicketResponse = require('./LDGetUploadTicketResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.GetUploadTicketResponse=new LDGetUploadTicketResponse(e['ut']);
	if(e['mut']!=null)$.GetMultipartUploadTicketResponse=new LDGetMultipartUploadTicketResponse(e['mut']);
	if(e['dt']!=null)$.GetDownloadTicketResponse=new LDGetDownloadTicketResponse(e['dt']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDClusterOrDeviceToClusterBlobResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetUploadTicketResponse!=null)o['ut']=$.GetUploadTicketResponse.encode();
	if($.GetMultipartUploadTicketResponse!=null)o['mut']=$.GetMultipartUploadTicketResponse.encode();
	if($.GetDownloadTicketResponse!=null)o['dt']=$.GetDownloadTicketResponse.encode();
	return o;
}
_.GetUploadTicketResponse=null;
_.GetMultipartUploadTicketResponse=null;
_.GetDownloadTicketResponse=null;

module.exports=O;
