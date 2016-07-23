var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityInfoContainer = require('./LDCommunityInfoContainer');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.CommunityId=new LDCommunityId(e['c']);
	if(e['C']!=null)$.CommunityInfo=new LDCommunityInfoContainer(e['C']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDJoinCommunityItem";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityId!=null)o['c']=$.CommunityId.encode();
	if($.CommunityInfo!=null)o['C']=$.CommunityInfo.encode();
	return o;
}
_.CommunityId=null;
_.CommunityInfo=null;

module.exports=O;
