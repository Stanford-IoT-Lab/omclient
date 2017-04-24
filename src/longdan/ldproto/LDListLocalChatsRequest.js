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
_.__type="LDListLocalChatsRequest";
_.__rt=LDListChatsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityId!=null)o['cid']=$.CommunityId.encode();
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.ListType!=null)o['lt']=$.ListType;
	if($.Vec3!=null)o['v']=$.Vec3.encode();
	if($.City!=null)o['y']=$.City.encode();
	if($.Legacy!=null)o['lg']=$.Legacy;
	return o;
}
_.CommunityId=null;
_.Latitude=null;
_.Longitude=null;
_.ListType=null;
_.Vec3=null;
_.City=null;
_.Legacy=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"llc":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
