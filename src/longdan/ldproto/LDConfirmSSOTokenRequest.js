var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDConfirmSSOTokenRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Token=e['t'];
}
LDConfirmSSOTokenRequest.prototype=new LDJSONLoggable();
LDConfirmSSOTokenRequest.prototype.constructor = LDConfirmSSOTokenRequest;
var _=LDConfirmSSOTokenRequest.prototype;
_.__type="LDConfirmSSOTokenRequest";
_.__rt=LDAccountDetailsResponse;
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
LDConfirmSSOTokenRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"ao":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDConfirmSSOTokenRequest;
