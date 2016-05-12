var LDJSONLoggable = require('./LDJSONLoggable');
var LDNearbyItemContainer = require('./LDNearbyItemContainer');

function LDItemBroadcastStateChangedPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Item=new LDNearbyItemContainer(e['i']);
}
LDItemBroadcastStateChangedPush.prototype=new LDJSONLoggable();
LDItemBroadcastStateChangedPush.prototype.constructor = LDItemBroadcastStateChangedPush;
var _=LDItemBroadcastStateChangedPush.prototype;
_.__type="LDItemBroadcastStateChangedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Item!=null)o['i']=$.Item.encode();
	return o;
}
_.Item=null;

module.exports=LDItemBroadcastStateChangedPush;
