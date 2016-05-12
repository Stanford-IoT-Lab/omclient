var LDJSONLoggable = require('./LDJSONLoggable');

function LDSubscribeForNearbyItemsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['t'];
	$.Ttl=e['e'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
}
LDSubscribeForNearbyItemsRequest.prototype=new LDJSONLoggable();
LDSubscribeForNearbyItemsRequest.prototype.constructor = LDSubscribeForNearbyItemsRequest;
var _=LDSubscribeForNearbyItemsRequest.prototype;
_.__type="LDSubscribeForNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemType!=null)o['t']=$.ItemType;
	if($.Ttl!=null)o['e']=$.Ttl;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	return o;
}
_.ItemType=null;
_.Ttl=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
LDSubscribeForNearbyItemsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"s":o};o=t;
	t={"#":id,"n":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSubscribeForNearbyItemsRequest;
