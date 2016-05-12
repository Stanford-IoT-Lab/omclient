var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDNearbyItemContainer = require('./LDNearbyItemContainer');

function LDUnbroadcastItemRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Item=new LDNearbyItemContainer(e['i']);
}
LDUnbroadcastItemRequest.prototype=new LDJSONLoggable();
LDUnbroadcastItemRequest.prototype.constructor = LDUnbroadcastItemRequest;
var _=LDUnbroadcastItemRequest.prototype;
_.__type="LDUnbroadcastItemRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Item!=null)o['i']=$.Item.encode();
	return o;
}
_.Item=null;
LDUnbroadcastItemRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ub":o};o=t;
	t={"#":id,"n":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnbroadcastItemRequest;
