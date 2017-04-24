var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.CanonicalCommunityId=new LDCommunityId(e['c']);
	if(e['u']!=null)$.UserCommunityId=new LDCommunityId(e['u']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCommunityIdKey";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CanonicalCommunityId!=null)o['c']=$.CanonicalCommunityId.encode();
	if($.UserCommunityId!=null)o['u']=$.UserCommunityId.encode();
	return o;
}
_.CanonicalCommunityId=null;
_.UserCommunityId=null;

module.exports=O;
