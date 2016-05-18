function O(e){
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Width=e['w'];
	$.Height=e['h'];
	$.ThumbnailUrl=e['s'];
	$.FullsizeUrl=e['f'];
	$.FileSize=e['S'];
	$.ContentType=e['c'];
}
var _=O.prototype;
_.__type="LDImageSearchResult";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Title!=null)o['t']=$.Title;
	if($.Width!=null)o['w']=$.Width;
	if($.Height!=null)o['h']=$.Height;
	if($.ThumbnailUrl!=null)o['s']=$.ThumbnailUrl;
	if($.FullsizeUrl!=null)o['f']=$.FullsizeUrl;
	if($.FileSize!=null)o['S']=$.FileSize;
	if($.ContentType!=null)o['c']=$.ContentType;
	return o;
}
_.Title=null;
_.Width=null;
_.Height=null;
_.ThumbnailUrl=null;
_.FullsizeUrl=null;
_.FileSize=null;
_.ContentType=null;

module.exports=O;
