var LDJSONLoggable = require('./LDJSONLoggable');
var LDUserCustomAppCommunityInfo = require('./LDUserCustomAppCommunityInfo');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.UserCustomAppCommunityInfo=new LDUserCustomAppCommunityInfo(e['a']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDUserCustomCommunityInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.UserCustomAppCommunityInfo!=null)o['a']=$.UserCustomAppCommunityInfo.encode();
	return o;
}
_.UserCustomAppCommunityInfo=null;

module.exports=O;
