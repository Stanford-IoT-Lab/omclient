var LDPost = require('./LDPost');

function O(e){
	LDPost.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['b'];
	$.ThumbnailLinkString=e['tn'];
	$.Height=e['H'];
	$.Width=e['W'];
}
O.prototype=new LDPost();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDScreenShotPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPost.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.ThumbnailLinkString!=null)o['tn']=$.ThumbnailLinkString;
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	return o;
}
_.BlobLinkString=null;
_.ThumbnailLinkString=null;
_.Height=null;
_.Width=null;

module.exports=O;
