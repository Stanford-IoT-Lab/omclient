var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.PackageId=e['pid'];
	$.Title=e['t'];
	$.Publisher=e['p'];
	$.Thumbnail=e['n'];
	$.IconBlobLink=e['i'];
	$.IsGame=e['g'];
	$.PlayStoreLink=e['psl'];
	$.BaiduStoreLink=e['bsl'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAppDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.Title!=null)o['t']=$.Title;
	if($.Publisher!=null)o['p']=$.Publisher;
	if($.Thumbnail!=null)o['n']=$.Thumbnail;
	if($.IconBlobLink!=null)o['i']=$.IconBlobLink;
	if($.IsGame!=null)o['g']=$.IsGame;
	if($.PlayStoreLink!=null)o['psl']=$.PlayStoreLink;
	if($.BaiduStoreLink!=null)o['bsl']=$.BaiduStoreLink;
	return o;
}
_.PackageId=null;
_.Title=null;
_.Publisher=null;
_.Thumbnail=null;
_.IconBlobLink=null;
_.IsGame=null;
_.PlayStoreLink=null;
_.BaiduStoreLink=null;

module.exports=O;
