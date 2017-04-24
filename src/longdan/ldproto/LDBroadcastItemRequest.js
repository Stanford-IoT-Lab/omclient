var LDBroadcastItemResponse = require('./LDBroadcastItemResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDNearbyItemContainer = require('./LDNearbyItemContainer');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Item=new LDNearbyItemContainer(e['i']);
	$.Pin=e['p'];
	$.Ttl=e['e'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
	$.Country=e['c'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDBroadcastItemRequest";
_.__rt=LDBroadcastItemResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Item!=null)o['i']=$.Item.encode();
	if($.Pin!=null)o['p']=$.Pin;
	if($.Ttl!=null)o['e']=$.Ttl;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	if($.Country!=null)o['c']=$.Country;
	return o;
}
_.Item=null;
_.Pin=null;
_.Ttl=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
_.Country=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"b":o};o=t;
	t={"#":id,"n":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
