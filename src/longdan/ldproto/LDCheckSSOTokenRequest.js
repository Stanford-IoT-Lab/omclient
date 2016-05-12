var LDCheckSSOTokenResponse = require('./LDCheckSSOTokenResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDCheckSSOTokenRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Token=e['t'];
}
LDCheckSSOTokenRequest.prototype=new LDJSONLoggable();
LDCheckSSOTokenRequest.prototype.constructor = LDCheckSSOTokenRequest;
var _=LDCheckSSOTokenRequest.prototype;
_.__type="LDCheckSSOTokenRequest";
_.__rt=LDCheckSSOTokenResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Account=null;
_.Token=null;
LDCheckSSOTokenRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"cs":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCheckSSOTokenRequest;
