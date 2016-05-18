var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ThumbnailLink=e['td'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPublicFeedDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Name!=null)o['n']=$.Name;
	if($.ThumbnailLink!=null)o['td']=$.ThumbnailLink;
	return o;
}
_.Name=null;
_.ThumbnailLink=null;

module.exports=O;
