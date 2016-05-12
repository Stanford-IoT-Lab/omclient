var LDListChatsResponse = require('./LDListChatsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDListInterestingChatsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
	$.PackageId=e['p'];
	$.Longitude=e['gt'];
	$.Latitude=e['gp'];
	$.ForwardingStage=e['f'];
	$.ForAppScopeId=e['fa'];
	$.ForCountry=e['fc'];
	$.ForCity=e['fy'];
}
LDListInterestingChatsRequest.prototype=new LDJSONLoggable();
LDListInterestingChatsRequest.prototype.constructor = LDListInterestingChatsRequest;
var _=LDListInterestingChatsRequest.prototype;
_.__type="LDListInterestingChatsRequest";
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
	if($.ForAppScopeId!=null)o['fa']=$.ForAppScopeId;
	if($.ForCountry!=null)o['fc']=$.ForCountry;
	if($.ForCity!=null)o['fy']=$.ForCity;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.Longitude=null;
_.Latitude=null;
_.ForwardingStage=null;
_.ForAppScopeId=null;
_.ForCountry=null;
_.ForCity=null;
LDListInterestingChatsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"li":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDListInterestingChatsRequest;
