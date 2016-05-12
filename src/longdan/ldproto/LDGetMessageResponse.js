var LDJSONLoggable = require('./LDJSONLoggable');
var LDMessage = require('./LDMessage');

function LDGetMessageResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new LDMessage(e['m']);
}
LDGetMessageResponse.prototype=new LDJSONLoggable();
LDGetMessageResponse.prototype.constructor = LDGetMessageResponse;
var _=LDGetMessageResponse.prototype;
_.__type="LDGetMessageResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;

module.exports=LDGetMessageResponse;
