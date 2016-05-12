var LDFetchNearbyItemsResponse = require('./LDFetchNearbyItemsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDFetchNearbyItemsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['t'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
}
LDFetchNearbyItemsRequest.prototype=new LDJSONLoggable();
LDFetchNearbyItemsRequest.prototype.constructor = LDFetchNearbyItemsRequest;
var _=LDFetchNearbyItemsRequest.prototype;
_.__type="LDFetchNearbyItemsRequest";
_.__rt=LDFetchNearbyItemsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemType!=null)o['t']=$.ItemType;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	return o;
}
_.ItemType=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
LDFetchNearbyItemsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"f":o};o=t;
	t={"#":id,"n":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDFetchNearbyItemsRequest;
