var LDListChatsResponse = require('./LDListChatsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
	$.PackageId=e['p'];
	$.Latitude=e['gp'];
	$.Longitude=e['gt'];
	$.ForAppScopeId=e['fa'];
	$.ForCountry=e['fc'];
	$.ForCity=e['fy'];
	$.Locale=e['lc'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDListInterestingChatsRequest";
_.__rt=LDListChatsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.ForAppScopeId!=null)o['fa']=$.ForAppScopeId;
	if($.ForCountry!=null)o['fc']=$.ForCountry;
	if($.ForCity!=null)o['fy']=$.ForCity;
	if($.Locale!=null)o['lc']=$.Locale;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.Latitude=null;
_.Longitude=null;
_.ForAppScopeId=null;
_.ForCountry=null;
_.ForCity=null;
_.Locale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"li":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
