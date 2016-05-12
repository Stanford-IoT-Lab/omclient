var LDJSONLoggable = require('./LDJSONLoggable');
var LDProfileDetails = require('./LDProfileDetails');

function LDGetProfileDetailsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfileDetails=new LDProfileDetails(e['p']);
}
LDGetProfileDetailsResponse.prototype=new LDJSONLoggable();
LDGetProfileDetailsResponse.prototype.constructor = LDGetProfileDetailsResponse;
var _=LDGetProfileDetailsResponse.prototype;
_.__type="LDGetProfileDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ProfileDetails!=null)o['p']=$.ProfileDetails.encode();
	return o;
}
_.ProfileDetails=null;

module.exports=LDGetProfileDetailsResponse;
