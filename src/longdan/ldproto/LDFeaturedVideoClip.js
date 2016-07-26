var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.PackageId=e['g'];
	if(e['p']!=null)$.PostId=new LDPostId(e['p']);
	$.ThumbnailBlobLink=e['t'];
	$.VideoBlobLink=e['v'];
	$.Width=e['w'];
	$.Height=e['h'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDFeaturedVideoClip";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PackageId!=null)o['g']=$.PackageId;
	if($.PostId!=null)o['p']=$.PostId.encode();
	if($.ThumbnailBlobLink!=null)o['t']=$.ThumbnailBlobLink;
	if($.VideoBlobLink!=null)o['v']=$.VideoBlobLink;
	if($.Width!=null)o['w']=$.Width;
	if($.Height!=null)o['h']=$.Height;
	return o;
}
_.PackageId=null;
_.PostId=null;
_.ThumbnailBlobLink=null;
_.VideoBlobLink=null;
_.Width=null;
_.Height=null;

module.exports=O;
