var LDJSONLoggable = require('./LDJSONLoggable');
var LDProfilePublicState = require('./LDProfilePublicState');

function LDGetProfilePublicStateResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfilePublicState=new LDProfilePublicState(e['p']);
}
LDGetProfilePublicStateResponse.prototype=new LDJSONLoggable();
LDGetProfilePublicStateResponse.prototype.constructor = LDGetProfilePublicStateResponse;
var _=LDGetProfilePublicStateResponse.prototype;
_.__type="LDGetProfilePublicStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ProfilePublicState!=null)o['p']=$.ProfilePublicState.encode();
	return o;
}
_.ProfilePublicState=null;

module.exports=LDGetProfilePublicStateResponse;
