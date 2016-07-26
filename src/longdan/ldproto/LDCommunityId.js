var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.CommunityType=e['ct'];
	$.CommunityId=e['cid'];
	$.Platform=e['p'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCommunityId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityType!=null)o['ct']=$.CommunityType;
	if($.CommunityId!=null)o['cid']=$.CommunityId;
	if($.Platform!=null)o['p']=$.Platform;
	return o;
}
_.CommunityType=null;
_.CommunityId=null;
_.Platform=null;

module.exports=O;
