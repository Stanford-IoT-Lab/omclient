var LDAppDetails = require('./LDAppDetails');

function O(e){
	if(!e)return;
	var $=this;
	$.PackageId=e['g'];
	$.Width=e['w'];
	$.Height=e['h'];
	$.BlobLink=e['b'];
	$.ThumbnailBlobLink=e['t'];
	if(e['d']!=null)$.Details=new LDAppDetails(e['d']);
}
var _=O.prototype;
_.__type="LDCarouselItem";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.PackageId!=null)o['g']=$.PackageId;
	if($.Width!=null)o['w']=$.Width;
	if($.Height!=null)o['h']=$.Height;
	if($.BlobLink!=null)o['b']=$.BlobLink;
	if($.ThumbnailBlobLink!=null)o['t']=$.ThumbnailBlobLink;
	if($.Details!=null)o['d']=$.Details.encode();
	return o;
}
_.PackageId=null;
_.Width=null;
_.Height=null;
_.BlobLink=null;
_.ThumbnailBlobLink=null;
_.Details=null;

module.exports=O;
