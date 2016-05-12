var LDJSONLoggable = require('./LDJSONLoggable');

function LDPingResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ObservedIp=e['i'];
	$.UtcMillis=e['t'];
}
LDPingResponse.prototype=new LDJSONLoggable();
LDPingResponse.prototype.constructor = LDPingResponse;
var _=LDPingResponse.prototype;
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

module.exports=LDPingResponse;
