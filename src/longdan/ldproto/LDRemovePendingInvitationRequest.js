var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentityHash = require('./LDIdentityHash');
var LDFeed = require('./LDFeed');

function LDRemovePendingInvitationRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.IdentityHash=new LDIdentityHash(e['i']);
}
LDRemovePendingInvitationRequest.prototype=new LDJSONLoggable();
LDRemovePendingInvitationRequest.prototype.constructor = LDRemovePendingInvitationRequest;
var _=LDRemovePendingInvitationRequest.prototype;
_.__type="LDRemovePendingInvitationRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.IdentityHash!=null)o['i']=$.IdentityHash.encode();
	return o;
}
_.Feed=null;
_.IdentityHash=null;
LDRemovePendingInvitationRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"e":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDRemovePendingInvitationRequest;
