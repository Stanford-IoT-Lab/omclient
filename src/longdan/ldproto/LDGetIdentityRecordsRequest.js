var LDGetIdentityRecordsResponse = require('./LDGetIdentityRecordsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function LDGetIdentityRecordsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.AdminAccount=e['a'];
}
LDGetIdentityRecordsRequest.prototype=new LDJSONLoggable();
LDGetIdentityRecordsRequest.prototype.constructor = LDGetIdentityRecordsRequest;
var _=LDGetIdentityRecordsRequest.prototype;
_.__type="LDGetIdentityRecordsRequest";
_.__rt=LDGetIdentityRecordsResponse;
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
LDGetIdentityRecordsRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"I":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetIdentityRecordsRequest;
