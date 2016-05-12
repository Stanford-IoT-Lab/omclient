var LDPost = require('./LDPost');

function LDScreenShotPost(e){
	LDPost.call(this,e);
	if(!e)return;
	var $=this;
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	$.ThumbnailLinkString=e['tn'];
	$.LinkUrl=e['u'];
	$.Height=e['H'];
	$.Width=e['W'];
}
LDScreenShotPost.prototype=new LDPost();
LDScreenShotPost.prototype.constructor = LDScreenShotPost;
var _=LDScreenShotPost.prototype;
_.__type="LDScreenShotPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPost.prototype.encode.call($,o);
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.ThumbnailLinkString!=null)o['tn']=$.ThumbnailLinkString;
	if($.LinkUrl!=null)o['u']=$.LinkUrl;
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	return o;
}
_.Description=null;
_.BlobLinkString=null;
_.ThumbnailLinkString=null;
_.LinkUrl=null;
_.Height=null;
_.Width=null;

module.exports=LDScreenShotPost;
