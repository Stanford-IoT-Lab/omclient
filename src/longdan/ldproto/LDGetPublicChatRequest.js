var LDGetPublicChatResponse = require('./LDGetPublicChatResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cid']!=null)$.CommunityId=new LDCommunityId(e['cid']);
	if(e['id']!=null)$.AppId=new Buffer(e['id'],'base64');
	$.PackageId=e['pid'];
	$.LobbyName=e['n'];
	$.Cluster=e['c'];
	$.Stripe=e['s'];
	$.Latitude=e['gp'];
	$.Longitude=e['gt'];
	$.LocationType=e['lt'];
	$.PersonalStreamAccount=e['psa'];
	$.Locale=e['lc'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPublicChatRequest";
_.__rt=LDGetPublicChatResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityId!=null)o['cid']=$.CommunityId.encode();
	if($.AppId!=null)o['id']=$.AppId.toString('base64');
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.LobbyName!=null)o['n']=$.LobbyName;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.Stripe!=null)o['s']=$.Stripe;
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.LocationType!=null)o['lt']=$.LocationType;
	if($.PersonalStreamAccount!=null)o['psa']=$.PersonalStreamAccount;
	if($.Locale!=null)o['lc']=$.Locale;
	return o;
}
_.CommunityId=null;
_.AppId=null;
_.PackageId=null;
_.LobbyName=null;
_.Cluster=null;
_.Stripe=null;
_.Latitude=null;
_.Longitude=null;
_.LocationType=null;
_.PersonalStreamAccount=null;
_.Locale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"g":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
