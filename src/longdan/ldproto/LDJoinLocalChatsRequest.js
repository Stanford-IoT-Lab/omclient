var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.DisplayName=e['n'];
	if(e['cid']!=null)$.CommunityId=new LDCommunityId(e['cid']);
	$.Latitude=e['gp'];
	$.Longitude=e['gt'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDJoinLocalChatsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.DisplayName!=null)o['n']=$.DisplayName;
	if($.CommunityId!=null)o['cid']=$.CommunityId.encode();
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.Longitude!=null)o['gt']=$.Longitude;
	return o;
}
_.DisplayName=null;
_.CommunityId=null;
_.Latitude=null;
_.Longitude=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"jlc":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
