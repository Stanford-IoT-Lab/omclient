function LDAppScreenshot(e){
	if(!e)return;
	var $=this;
	$.ThumbnailBlobLinkString=e['tb'];
	$.FullsizeBlobLinkString=e['fb'];
}
var _=LDAppScreenshot.prototype;
_.__type="LDAppScreenshot";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ThumbnailBlobLinkString!=null)o['tb']=$.ThumbnailBlobLinkString;
	if($.FullsizeBlobLinkString!=null)o['fb']=$.FullsizeBlobLinkString;
	return o;
}
_.ThumbnailBlobLinkString=null;
_.FullsizeBlobLinkString=null;

module.exports=LDAppScreenshot;
