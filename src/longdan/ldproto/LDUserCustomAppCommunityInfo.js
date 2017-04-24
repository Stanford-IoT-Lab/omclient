var LDUserCustomCommunityInfo = require('./LDUserCustomCommunityInfo');

function O(e){
	LDUserCustomCommunityInfo.call(this,e);
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.Icon=e['i'];
}
O.prototype=new LDUserCustomCommunityInfo();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDUserCustomAppCommunityInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDUserCustomCommunityInfo.prototype.encode.call($,o);
	if($.Name!=null)o['n']=$.Name;
	if($.Icon!=null)o['i']=$.Icon;
	return o;
}
_.Name=null;
_.Icon=null;

module.exports=O;
