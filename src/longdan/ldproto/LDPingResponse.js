var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ObservedIp=e['i'];
	$.UtcMillis=e['t'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPingResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ObservedIp!=null)o['i']=$.ObservedIp;
	if($.UtcMillis!=null)o['t']=$.UtcMillis;
	return o;
}
_.ObservedIp=null;
_.UtcMillis=null;

module.exports=O;
