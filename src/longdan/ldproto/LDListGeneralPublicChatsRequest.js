var LDListChatsResponse = require('./LDListChatsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cid']!=null)$.CommunityId=new LDCommunityId(e['cid']);
	$.Latitude=e['gp'];
	$.Longitude=e['gt'];
	$.ListType=e['lt'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDListGeneralPublicChatsRequest";
_.__rt=LDListChatsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityId!=null)o['cid']=$.CommunityId.encode();
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.ListType!=null)o['lt']=$.ListType;
	if($.CountryCode!=null)o['v']=$.CountryCode;
	return o;
}
_.CommunityId=null;
_.Latitude=null;
_.Longitude=null;
_.ListType=null;
_.CountryCode=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"lgp":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
