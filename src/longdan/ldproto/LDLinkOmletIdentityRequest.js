var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function LDLinkOmletIdentityRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.Account=e['a'];
}
LDLinkOmletIdentityRequest.prototype=new LDJSONLoggable();
LDLinkOmletIdentityRequest.prototype.constructor = LDLinkOmletIdentityRequest;
var _=LDLinkOmletIdentityRequest.prototype;
_.__type="LDLinkOmletIdentityRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Identity=null;
_.Account=null;
LDLinkOmletIdentityRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"O":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDLinkOmletIdentityRequest;
