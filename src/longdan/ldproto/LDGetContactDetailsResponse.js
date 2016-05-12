var LDJSONLoggable = require('./LDJSONLoggable');
var LDContactDetails = require('./LDContactDetails');

function LDGetContactDetailsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactDetails=new LDContactDetails(e['c']);
}
LDGetContactDetailsResponse.prototype=new LDJSONLoggable();
LDGetContactDetailsResponse.prototype.constructor = LDGetContactDetailsResponse;
var _=LDGetContactDetailsResponse.prototype;
_.__type="LDGetContactDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactDetails!=null)o['c']=$.ContactDetails.encode();
	return o;
}
_.ContactDetails=null;

module.exports=LDGetContactDetailsResponse;
