var LDPost = require('./LDPost');

function O(e){
	LDPost.call(this,e);
	if(!e)return;
	var $=this;
	$.Link=e['ll'];
	$.LinkTitle=e['lt'];
	$.LinkThumbnailBlobLink=e['lb'];
	$.LinkThumbnailWidth=e['lw'];
	$.LinkThumbnailHeight=e['lh'];
	$.LinkBody=e['lB'];
}
O.prototype=new LDPost();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDMessagePost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPost.prototype.encode.call($,o);
	if($.Link!=null)o['ll']=$.Link;
	if($.LinkTitle!=null)o['lt']=$.LinkTitle;
	if($.LinkThumbnailBlobLink!=null)o['lb']=$.LinkThumbnailBlobLink;
	if($.LinkThumbnailWidth!=null)o['lw']=$.LinkThumbnailWidth;
	if($.LinkThumbnailHeight!=null)o['lh']=$.LinkThumbnailHeight;
	if($.LinkBody!=null)o['lB']=$.LinkBody;
	return o;
}
_.Link=null;
_.LinkTitle=null;
_.LinkThumbnailBlobLink=null;
_.LinkThumbnailWidth=null;
_.LinkThumbnailHeight=null;
_.LinkBody=null;

module.exports=O;
