var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');
var LDFeed = require('./LDFeed');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['cid']!=null)$.CommunityId=new LDCommunityId(e['cid']);
	$.LobbyName=e['n'];
	$.Stripe=e['s'];
	$.DisplayName=e['dn'];
	$.Members=e['m'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPublicChatInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.CommunityId!=null)o['cid']=$.CommunityId.encode();
	if($.LobbyName!=null)o['n']=$.LobbyName;
	if($.Stripe!=null)o['s']=$.Stripe;
	if($.DisplayName!=null)o['dn']=$.DisplayName;
	if($.Members!=null)o['m']=$.Members;
	return o;
}
_.Feed=null;
_.CommunityId=null;
_.LobbyName=null;
_.Stripe=null;
_.DisplayName=null;
_.Members=null;

module.exports=O;
