var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDPublicChatInfo(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['id']!=null)$.AppId=new Buffer(e['id'],'base64');
	$.PackageId=e['pid'];
	$.LobbyName=e['n'];
	$.Stripe=e['s'];
	$.DisplayName=e['dn'];
	$.Members=e['m'];
}
LDPublicChatInfo.prototype=new LDJSONLoggable();
LDPublicChatInfo.prototype.constructor = LDPublicChatInfo;
var _=LDPublicChatInfo.prototype;
_.__type="LDPublicChatInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.AppId!=null)o['id']=$.AppId.toString('base64');
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.LobbyName!=null)o['n']=$.LobbyName;
	if($.Stripe!=null)o['s']=$.Stripe;
	if($.DisplayName!=null)o['dn']=$.DisplayName;
	if($.Members!=null)o['m']=$.Members;
	return o;
}
_.Feed=null;
_.AppId=null;
_.PackageId=null;
_.LobbyName=null;
_.Stripe=null;
_.DisplayName=null;
_.Members=null;

module.exports=LDPublicChatInfo;
