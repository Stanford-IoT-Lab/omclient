var LDGetMultipartUploadTicketResponse = require('./LDGetMultipartUploadTicketResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobMetadata = require('./LDBlobMetadata');

function LDGetMultipartUploadTicketRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Cluster=e['c'];
	if(e['wm']!=null)$.WholeMetadata=new LDBlobMetadata(e['wm']);
	if(e['pm']!=null){
		$.PartMetadataList=[];
		var d = e['pm'];
		for(var k=0; k<d.length;++k)$.PartMetadataList.push(new LDBlobMetadata(d[k]));
	}
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
	$.PreferInsecure=e['e'];
}
LDGetMultipartUploadTicketRequest.prototype=new LDJSONLoggable();
LDGetMultipartUploadTicketRequest.prototype.constructor = LDGetMultipartUploadTicketRequest;
var _=LDGetMultipartUploadTicketRequest.prototype;
_.__type="LDGetMultipartUploadTicketRequest";
_.__rt=LDGetMultipartUploadTicketResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.WholeMetadata!=null)o['wm']=$.WholeMetadata.encode();
	if($.PartMetadataList!=null) {
		o['pm']=[];
		var d=$.PartMetadataList;
		for(var k=0;k<d.length;++k) o['pm'].push(d[k].encode());
	}
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	if($.PreferInsecure!=null)o['e']=$.PreferInsecure;
	return o;
}
_.Account=null;
_.Cluster=null;
_.WholeMetadata=null;
_.PartMetadataList=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
_.PreferInsecure=null;
LDGetMultipartUploadTicketRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"mut":o};o=t;
	t={"#":id,"b":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetMultipartUploadTicketRequest;
