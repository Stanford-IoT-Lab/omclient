var LDJSONLoggable = require('./LDJSONLoggable');
var LDContactDetails = require('./LDContactDetails');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactDetails=new LDContactDetails(e['c']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetContactDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactDetails!=null)o['c']=$.ContactDetails.encode();
	return o;
}
_.ContactDetails=null;

module.exports=O;
