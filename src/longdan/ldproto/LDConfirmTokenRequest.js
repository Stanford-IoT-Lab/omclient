var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function LDConfirmTokenRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.Token=e['t'];
}
LDConfirmTokenRequest.prototype=new LDJSONLoggable();
LDConfirmTokenRequest.prototype.constructor = LDConfirmTokenRequest;
var _=LDConfirmTokenRequest.prototype;
_.__type="LDConfirmTokenRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Identity=null;
_.Token=null;
LDConfirmTokenRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"c":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDConfirmTokenRequest;
