var LDJSONLoggable = require('./LDJSONLoggable');
var LDProfilePublicState = require('./LDProfilePublicState');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfilePublicState=new LDProfilePublicState(e['p']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetProfilePublicStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ProfilePublicState!=null)o['p']=$.ProfilePublicState.encode();
	return o;
}
_.ProfilePublicState=null;

module.exports=O;
