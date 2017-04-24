var LDJSONLoggable = require('./LDJSONLoggable');
var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Link=e['l'];
	$.Status=e['s'];
	$.RegisterAuthCode=e['r'];
	if(e['a']!=null)$.AccountDetailsResponse=new LDAccountDetailsResponse(e['a']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetAppSigninLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Link!=null)o['l']=$.Link;
	if($.Status!=null)o['s']=$.Status;
	if($.RegisterAuthCode!=null)o['r']=$.RegisterAuthCode;
	if($.AccountDetailsResponse!=null)o['a']=$.AccountDetailsResponse.encode();
	return o;
}
_.Link=null;
_.Status=null;
_.RegisterAuthCode=null;
_.AccountDetailsResponse=null;

module.exports=O;
