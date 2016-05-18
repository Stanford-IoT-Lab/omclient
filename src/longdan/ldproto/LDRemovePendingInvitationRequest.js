var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentityHash = require('./LDIdentityHash');
var LDFeed = require('./LDFeed');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.IdentityHash=new LDIdentityHash(e['i']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
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
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"e":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
