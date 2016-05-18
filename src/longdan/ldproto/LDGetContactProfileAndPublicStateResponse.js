var LDJSONLoggable = require('./LDJSONLoggable');
var LDProfilePublicState = require('./LDProfilePublicState');
var LDContactProfile = require('./LDContactProfile');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactProfile=new LDContactProfile(e['c']);
	if(e['p']!=null)$.ProfilePublicState=new LDProfilePublicState(e['p']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetContactProfileAndPublicStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactProfile!=null)o['c']=$.ContactProfile.encode();
	if($.ProfilePublicState!=null)o['p']=$.ProfilePublicState.encode();
	return o;
}
_.ContactProfile=null;
_.ProfilePublicState=null;

module.exports=O;
