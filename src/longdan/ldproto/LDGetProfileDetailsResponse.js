var LDJSONLoggable = require('./LDJSONLoggable');
var LDProfileDetails = require('./LDProfileDetails');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfileDetails=new LDProfileDetails(e['p']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetProfileDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ProfileDetails!=null)o['p']=$.ProfileDetails.encode();
	return o;
}
_.ProfileDetails=null;

module.exports=O;
