var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function LDUnblockIdentityRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.AdminAccount=e['a'];
}
LDUnblockIdentityRequest.prototype=new LDJSONLoggable();
LDUnblockIdentityRequest.prototype.constructor = LDUnblockIdentityRequest;
var _=LDUnblockIdentityRequest.prototype;
_.__type="LDUnblockIdentityRequest";
_.__rt=LDSimpleResponse;
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
LDUnblockIdentityRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnblockIdentityRequest;
