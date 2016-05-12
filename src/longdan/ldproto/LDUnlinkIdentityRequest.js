var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function LDUnlinkIdentityRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.Account=e['a'];
}
LDUnlinkIdentityRequest.prototype=new LDJSONLoggable();
LDUnlinkIdentityRequest.prototype.constructor = LDUnlinkIdentityRequest;
var _=LDUnlinkIdentityRequest.prototype;
_.__type="LDUnlinkIdentityRequest";
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
LDUnlinkIdentityRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnlinkIdentityRequest;
