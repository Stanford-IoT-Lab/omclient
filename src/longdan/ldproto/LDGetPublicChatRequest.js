var LDGetPublicChatResponse = require('./LDGetPublicChatResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.AppId=new Buffer(e['id'],'base64');
	$.PackageId=e['pid'];
	$.LobbyName=e['n'];
	$.Cluster=e['c'];
	$.Stripe=e['s'];
	$.Longitude=e['gt'];
	$.Latitude=e['gp'];
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
	if($.AppId!=null)o['id']=$.AppId.toString('base64');
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.LobbyName!=null)o['n']=$.LobbyName;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.Stripe!=null)o['s']=$.Stripe;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.Latitude!=null)o['gp']=$.Latitude;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.LobbyName=null;
_.Cluster=null;
_.Stripe=null;
_.Longitude=null;
_.Latitude=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"g":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
