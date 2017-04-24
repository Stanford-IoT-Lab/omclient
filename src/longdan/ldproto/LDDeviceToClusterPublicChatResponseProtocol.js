var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDListChatsResponse = require('./LDListChatsResponse');
var LDGetRecentMessagesResponse = require('./LDGetRecentMessagesResponse');
var LDGetPublicChatMembersResponse = require('./LDGetPublicChatMembersResponse');
var LDGetPublicChatResponse = require('./LDGetPublicChatResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetPublicChatResponse=new LDGetPublicChatResponse(e['g']);
	if(e['gm']!=null)$.GetPublicChatMembersResponse=new LDGetPublicChatMembersResponse(e['gm']);
	if(e['gr']!=null)$.GetRecentMessagesResponse=new LDGetRecentMessagesResponse(e['gr']);
	if(e['lc']!=null)$.ListLiveChatsResponse=new LDListChatsResponse(e['lc']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterPublicChatResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetPublicChatResponse!=null)o['g']=$.GetPublicChatResponse.encode();
	if($.GetPublicChatMembersResponse!=null)o['gm']=$.GetPublicChatMembersResponse.encode();
	if($.GetRecentMessagesResponse!=null)o['gr']=$.GetRecentMessagesResponse.encode();
	if($.ListLiveChatsResponse!=null)o['lc']=$.ListLiveChatsResponse.encode();
	return o;
}
_.GetPublicChatResponse=null;
_.GetPublicChatMembersResponse=null;
_.GetRecentMessagesResponse=null;
_.ListLiveChatsResponse=null;

module.exports=O;
