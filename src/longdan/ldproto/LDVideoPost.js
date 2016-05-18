var LDPost = require('./LDPost');
var LDM3U8Info = require('./LDM3U8Info');

function O(e){
	LDPost.call(this,e);
	if(!e)return;
	var $=this;
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	if(e['r']!=null)$.VideoBlobRefTag=new Buffer(e['r'],'base64');
	$.ThumbnailBlobLinkString=e['B'];
	$.HlsUrl=e['h'];
	$.LinkUrl=e['u'];
	if(e['m']!=null){
		$.M3u8s=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.M3u8s.push(new LDM3U8Info(d[k]));
	}
	$.Height=e['H'];
	$.Width=e['W'];
	$.Duration=e['D'];
}
O.prototype=new LDPost();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDVideoPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPost.prototype.encode.call($,o);
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.VideoBlobRefTag!=null)o['r']=$.VideoBlobRefTag.toString('base64');
	if($.ThumbnailBlobLinkString!=null)o['B']=$.ThumbnailBlobLinkString;
	if($.HlsUrl!=null)o['h']=$.HlsUrl;
	if($.LinkUrl!=null)o['u']=$.LinkUrl;
	if($.M3u8s!=null) {
		o['m']=[];
		var d=$.M3u8s;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	if($.Duration!=null)o['D']=$.Duration;
	return o;
}
_.Description=null;
_.BlobLinkString=null;
_.VideoBlobRefTag=null;
_.ThumbnailBlobLinkString=null;
_.HlsUrl=null;
_.LinkUrl=null;
_.M3u8s=null;
_.Height=null;
_.Width=null;
_.Duration=null;

module.exports=O;
