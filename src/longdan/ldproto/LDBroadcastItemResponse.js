var LDJSONLoggable = require('./LDJSONLoggable');

function LDBroadcastItemResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Pin=e['p'];
}
LDBroadcastItemResponse.prototype=new LDJSONLoggable();
LDBroadcastItemResponse.prototype.constructor = LDBroadcastItemResponse;
var _=LDBroadcastItemResponse.prototype;
_.__type="LDBroadcastItemResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Pin!=null)o['p']=$.Pin;
	return o;
}
_.Pin=null;

module.exports=LDBroadcastItemResponse;
