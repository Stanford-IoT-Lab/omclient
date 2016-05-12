function LDBlobUploadTicket(e){
	if(!e)return;
	var $=this;
	$.UploadUrl=e['u'];
	if(e['h']!=null){
		$.UploadHeaders = {};
		var d = e['h'];
		for(var k in d) $.UploadHeaders[k]=d[k];
	}
	$.Cluster=e['c'];
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
	$.AlreadyUploaded=e['a'];
	$.BlobLinkString=e['l'];
}
var _=LDBlobUploadTicket.prototype;
_.__type="LDBlobUploadTicket";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.UploadUrl!=null)o['u']=$.UploadUrl;
	if($.UploadHeaders!=null){
		o['h']={};
		var d=$.UploadHeaders;
		for(var k in d)o['h'][k]=d[k];
	}
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	if($.AlreadyUploaded!=null)o['a']=$.AlreadyUploaded;
	if($.BlobLinkString!=null)o['l']=$.BlobLinkString;
	return o;
}
_.UploadUrl=null;
_.UploadHeaders=null;
_.Cluster=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
_.AlreadyUploaded=null;
_.BlobLinkString=null;

module.exports=LDBlobUploadTicket;
