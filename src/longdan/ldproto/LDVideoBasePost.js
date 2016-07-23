var LDPost = require('./LDPost');

function O(e){
	LDPost.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['b'];
	if(e['r']!=null)$.VideoBlobRefTag=new Buffer(e['r'],'base64');
	$.ThumbnailBlobLinkString=e['B'];
	$.Height=e['H'];
	$.Width=e['W'];
	$.Duration=e['D'];
}
O.prototype=new LDPost();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDVideoBasePost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPost.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.VideoBlobRefTag!=null)o['r']=$.VideoBlobRefTag.toString('base64');
	if($.ThumbnailBlobLinkString!=null)o['B']=$.ThumbnailBlobLinkString;
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	if($.Duration!=null)o['D']=$.Duration;
	return o;
}
_.BlobLinkString=null;
_.VideoBlobRefTag=null;
_.ThumbnailBlobLinkString=null;
_.Height=null;
_.Width=null;
_.Duration=null;

module.exports=O;
