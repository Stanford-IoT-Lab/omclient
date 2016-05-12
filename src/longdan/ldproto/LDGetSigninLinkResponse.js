var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetSigninLinkResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Link=e['l'];
}
LDGetSigninLinkResponse.prototype=new LDJSONLoggable();
LDGetSigninLinkResponse.prototype.constructor = LDGetSigninLinkResponse;
var _=LDGetSigninLinkResponse.prototype;
_.__type="LDGetSigninLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Link!=null)o['l']=$.Link;
	return o;
}
_.Link=null;

module.exports=LDGetSigninLinkResponse;
