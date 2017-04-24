var LDPostBaseRequest = require('./LDPostBaseRequest');

function O(e){
	LDPostBaseRequest.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['b'];
	if(e['r']!=null)$.VideoBlobRefTag=new Buffer(e['r'],'base64');
	$.Duration=e['dr'];
	$.ThumbnailBlobLinkString=e['B'];
	$.Height=e['H'];
	$.Width=e['W'];
}
O.prototype=new LDPostBaseRequest();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostVideoBaseRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPostBaseRequest.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.VideoBlobRefTag!=null)o['r']=$.VideoBlobRefTag.toString('base64');
	if($.Duration!=null)o['dr']=$.Duration;
	if($.ThumbnailBlobLinkString!=null)o['B']=$.ThumbnailBlobLinkString;
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	return o;
}
_.BlobLinkString=null;
_.VideoBlobRefTag=null;
_.Duration=null;
_.ThumbnailBlobLinkString=null;
_.Height=null;
_.Width=null;

module.exports=O;
