var LDJSONLoggable = require('./LDJSONLoggable');
var LDContactProfile = require('./LDContactProfile');

function LDGetOmletContactProfileResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ContactProfile=new LDContactProfile(e['p']);
}
LDGetOmletContactProfileResponse.prototype=new LDJSONLoggable();
LDGetOmletContactProfileResponse.prototype.constructor = LDGetOmletContactProfileResponse;
var _=LDGetOmletContactProfileResponse.prototype;
_.__type="LDGetOmletContactProfileResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactProfile!=null)o['p']=$.ContactProfile.encode();
	return o;
}
_.ContactProfile=null;

module.exports=LDGetOmletContactProfileResponse;
