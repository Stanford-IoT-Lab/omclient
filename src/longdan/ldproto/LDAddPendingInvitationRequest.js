var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');
var LDIdentityHash = require('./LDIdentityHash');
var LDFeed = require('./LDFeed');

function LDAddPendingInvitationRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.IdentityHash=new LDIdentityHash(e['i']);
	if(e['I']!=null)$.Identity=new LDIdentity(e['I']);
}
LDAddPendingInvitationRequest.prototype=new LDJSONLoggable();
LDAddPendingInvitationRequest.prototype.constructor = LDAddPendingInvitationRequest;
var _=LDAddPendingInvitationRequest.prototype;
_.__type="LDAddPendingInvitationRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.IdentityHash!=null)o['i']=$.IdentityHash.encode();
	if($.Identity!=null)o['I']=$.Identity.encode();
	return o;
}
_.Feed=null;
_.IdentityHash=null;
_.Identity=null;
LDAddPendingInvitationRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"f":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAddPendingInvitationRequest;
