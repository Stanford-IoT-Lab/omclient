var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDVerifyExistsAndPermanenceRequest = require('./LDVerifyExistsAndPermanenceRequest');
var LDGetDownloadTicketRequest = require('./LDGetDownloadTicketRequest');
var LDVerifyUploadCompletedRequest = require('./LDVerifyUploadCompletedRequest');
var LDGetMultipartUploadTicketRequest = require('./LDGetMultipartUploadTicketRequest');
var LDGetUploadTicketRequest = require('./LDGetUploadTicketRequest');

function LDClusterOrDeviceToClusterBlobRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.GetUploadTicket=new LDGetUploadTicketRequest(e['ut']);
	if(e['mut']!=null)$.GetMultipartUploadTicket=new LDGetMultipartUploadTicketRequest(e['mut']);
	if(e['vc']!=null)$.VerifyUploadCompleted=new LDVerifyUploadCompletedRequest(e['vc']);
	if(e['dt']!=null)$.GetDownloadTicket=new LDGetDownloadTicketRequest(e['dt']);
	if(e['ve']!=null)$.VerifyExistsAndPermanence=new LDVerifyExistsAndPermanenceRequest(e['ve']);
}
LDClusterOrDeviceToClusterBlobRequestProtocol.prototype=new LDRequestProtocolBase();
LDClusterOrDeviceToClusterBlobRequestProtocol.prototype.constructor = LDClusterOrDeviceToClusterBlobRequestProtocol;
var _=LDClusterOrDeviceToClusterBlobRequestProtocol.prototype;
_.__type="LDClusterOrDeviceToClusterBlobRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetUploadTicket!=null)o['ut']=$.GetUploadTicket.encode();
	if($.GetMultipartUploadTicket!=null)o['mut']=$.GetMultipartUploadTicket.encode();
	if($.VerifyUploadCompleted!=null)o['vc']=$.VerifyUploadCompleted.encode();
	if($.GetDownloadTicket!=null)o['dt']=$.GetDownloadTicket.encode();
	if($.VerifyExistsAndPermanence!=null)o['ve']=$.VerifyExistsAndPermanence.encode();
	return o;
}
_.GetUploadTicket=null;
_.GetMultipartUploadTicket=null;
_.VerifyUploadCompleted=null;
_.GetDownloadTicket=null;
_.VerifyExistsAndPermanence=null;

module.exports=LDClusterOrDeviceToClusterBlobRequestProtocol;
