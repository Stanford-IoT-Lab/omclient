var LDJSONLoggable = require('./LDJSONLoggable');
var LDUser = require('./LDUser');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.User=new LDUser(e['a']);
	$.LastAppName=e['n'];
	$.LastAppIconBlobLink=e['b'];
	$.LastPackageName=e['p'];
	$.StreamingLink=e['s'];
	$.LastStream=e['S'];
	$.ExternalViewingLink=e['v'];
	$.StreamPreviewThumbnailBlobLink=e['t'];
	$.StreamPreviewHlsLink=e['H'];
	$.StreamPreviewWidth=e['w'];
	$.StreamPreviewHeight=e['h'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDStreamState";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.User!=null)o['a']=$.User.encode();
	if($.LastAppName!=null)o['n']=$.LastAppName;
	if($.LastAppIconBlobLink!=null)o['b']=$.LastAppIconBlobLink;
	if($.LastPackageName!=null)o['p']=$.LastPackageName;
	if($.StreamingLink!=null)o['s']=$.StreamingLink;
	if($.LastStream!=null)o['S']=$.LastStream;
	if($.ExternalViewingLink!=null)o['v']=$.ExternalViewingLink;
	if($.StreamPreviewThumbnailBlobLink!=null)o['t']=$.StreamPreviewThumbnailBlobLink;
	if($.StreamPreviewHlsLink!=null)o['H']=$.StreamPreviewHlsLink;
	if($.StreamPreviewWidth!=null)o['w']=$.StreamPreviewWidth;
	if($.StreamPreviewHeight!=null)o['h']=$.StreamPreviewHeight;
	return o;
}
_.User=null;
_.LastAppName=null;
_.LastAppIconBlobLink=null;
_.LastPackageName=null;
_.StreamingLink=null;
_.LastStream=null;
_.ExternalViewingLink=null;
_.StreamPreviewThumbnailBlobLink=null;
_.StreamPreviewHlsLink=null;
_.StreamPreviewWidth=null;
_.StreamPreviewHeight=null;

module.exports=O;
