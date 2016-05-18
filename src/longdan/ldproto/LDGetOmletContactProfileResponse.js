var LDJSONLoggable = require('./LDJSONLoggable');
var LDContactProfile = require('./LDContactProfile');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ContactProfile=new LDContactProfile(e['p']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetOmletContactProfileResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactProfile!=null)o['p']=$.ContactProfile.encode();
	return o;
}
_.ContactProfile=null;

module.exports=O;
