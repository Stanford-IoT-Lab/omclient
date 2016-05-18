function O(e){
	if(!e)return;
	var $=this;
	$.Id=e['i'];
	$.Width=e['w'];
	$.Height=e['h'];
	$.ThumbnailBlobLinkString=e['tb'];
	if(e['tdh']!=null)$.ThumbnailDecryptedHash=new Buffer(e['tdh'],'base64');
	$.FullsizeBlobLinkString=e['fb'];
	if(e['fdh']!=null)$.FullsizeDecryptedHash=new Buffer(e['fdh'],'base64');
	$.IsVideo=e['v'];
	$.Name=e['n'];
	$.Description=e['d'];
	if(e['t']!=null){
		$.Tags=[];
		var d = e['t'];
		for(var k=0;k<d.length;++k)$.Tags.push(d[k]);
	}
}
var _=O.prototype;
_.__type="LDSticker";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Id!=null)o['i']=$.Id;
	if($.Width!=null)o['w']=$.Width;
	if($.Height!=null)o['h']=$.Height;
	if($.ThumbnailBlobLinkString!=null)o['tb']=$.ThumbnailBlobLinkString;
	if($.ThumbnailDecryptedHash!=null)o['tdh']=$.ThumbnailDecryptedHash.toString('base64');
	if($.FullsizeBlobLinkString!=null)o['fb']=$.FullsizeBlobLinkString;
	if($.FullsizeDecryptedHash!=null)o['fdh']=$.FullsizeDecryptedHash.toString('base64');
	if($.IsVideo!=null)o['v']=$.IsVideo;
	if($.Name!=null)o['n']=$.Name;
	if($.Description!=null)o['d']=$.Description;
	if($.Tags!=null) {
		o['t']=[];
		var d=$.Tags;
		for(var k=0;k<d.length;++k) o['t'].push(d[k]);
	}
	return o;
}
_.Id=null;
_.Width=null;
_.Height=null;
_.ThumbnailBlobLinkString=null;
_.ThumbnailDecryptedHash=null;
_.FullsizeBlobLinkString=null;
_.FullsizeDecryptedHash=null;
_.IsVideo=null;
_.Name=null;
_.Description=null;
_.Tags=null;

module.exports=O;
