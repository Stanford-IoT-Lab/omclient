var LDListChatsResponse = require('./LDListChatsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
	$.PackageId=e['p'];
	$.Longitude=e['gt'];
	$.Latitude=e['gp'];
	$.ForwardingStage=e['f'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDListLiveChatsRequest";
_.__rt=LDListChatsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.ForwardingStage!=null)o['f']=$.ForwardingStage;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.Longitude=null;
_.Latitude=null;
_.ForwardingStage=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"lc":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
