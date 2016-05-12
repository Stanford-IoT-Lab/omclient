var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetIdentityTokenResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Token=e['t'];
}
LDGetIdentityTokenResponse.prototype=new LDJSONLoggable();
LDGetIdentityTokenResponse.prototype.constructor = LDGetIdentityTokenResponse;
var _=LDGetIdentityTokenResponse.prototype;
_.__type="LDGetIdentityTokenResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Token=null;

module.exports=LDGetIdentityTokenResponse;
