var LDJSONLoggable = require('./LDJSONLoggable');
var LDNearbyItemContainer = require('./LDNearbyItemContainer');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Item=new LDNearbyItemContainer(e['i']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDItemBroadcastStateChangedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Item!=null)o['i']=$.Item.encode();
	return o;
}
_.Item=null;

module.exports=O;
