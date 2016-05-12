var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function LDGetAccountDetailsByIdentityRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.AdminAccount=e['a'];
}
LDGetAccountDetailsByIdentityRequest.prototype=new LDJSONLoggable();
LDGetAccountDetailsByIdentityRequest.prototype.constructor = LDGetAccountDetailsByIdentityRequest;
var _=LDGetAccountDetailsByIdentityRequest.prototype;
_.__type="LDGetAccountDetailsByIdentityRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
LDGetAccountDetailsByIdentityRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"i":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetAccountDetailsByIdentityRequest;
