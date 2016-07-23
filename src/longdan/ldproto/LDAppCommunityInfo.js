var LDCommunityInfo = require('./LDCommunityInfo');

function O(e){
	LDCommunityInfo.call(this,e);
	if(!e)return;
	var $=this;
	$.Publisher=e['p'];
	$.IsGame=e['g'];
	$.PlayStoreLink=e['psl'];
	$.BaiduStoreLink=e['bsl'];
}
O.prototype=new LDCommunityInfo();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAppCommunityInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDCommunityInfo.prototype.encode.call($,o);
	if($.Publisher!=null)o['p']=$.Publisher;
	if($.IsGame!=null)o['g']=$.IsGame;
	if($.PlayStoreLink!=null)o['psl']=$.PlayStoreLink;
	if($.BaiduStoreLink!=null)o['bsl']=$.BaiduStoreLink;
	return o;
}
_.Publisher=null;
_.IsGame=null;
_.PlayStoreLink=null;
_.BaiduStoreLink=null;

module.exports=O;
