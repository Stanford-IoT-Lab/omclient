var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDPublicChatMessageTerminatedPush = require('./LDPublicChatMessageTerminatedPush');
var LDPublicChatMessageDeliveryPush = require('./LDPublicChatMessageDeliveryPush');
var LDListInterestingChatsRequest = require('./LDListInterestingChatsRequest');
var LDListLiveChatsRequest = require('./LDListLiveChatsRequest');
var LDGetRecentMessagesRequest = require('./LDGetRecentMessagesRequest');
var LDGetPublicChatMembersRequest = require('./LDGetPublicChatMembersRequest');
var LDWriteToPublicChatRequest = require('./LDWriteToPublicChatRequest');
var LDLeavePublicChatRequest = require('./LDLeavePublicChatRequest');
var LDJoinPublicChatRequest = require('./LDJoinPublicChatRequest');
var LDGetPublicChatRequest = require('./LDGetPublicChatRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetPublicChatRequest=new LDGetPublicChatRequest(e['g']);
	if(e['j']!=null)$.JoinPublicChatRequest=new LDJoinPublicChatRequest(e['j']);
	if(e['l']!=null)$.LeavePublicChatRequest=new LDLeavePublicChatRequest(e['l']);
	if(e['w']!=null)$.WriteToPublicChatRequest=new LDWriteToPublicChatRequest(e['w']);
	if(e['gm']!=null)$.GetPublicChatMembersRequest=new LDGetPublicChatMembersRequest(e['gm']);
	if(e['gr']!=null)$.GetRecentMessagesRequest=new LDGetRecentMessagesRequest(e['gr']);
	if(e['lc']!=null)$.ListLiveChatsRequest=new LDListLiveChatsRequest(e['lc']);
	if(e['li']!=null)$.ListInterestingChatsRequest=new LDListInterestingChatsRequest(e['li']);
	if(e['p']!=null)$.PublicChatMessageDeliveryPush=new LDPublicChatMessageDeliveryPush(e['p']);
	if(e['t']!=null)$.PublicChatTerminatedPush=new LDPublicChatMessageTerminatedPush(e['t']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterPublicChatRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetPublicChatRequest!=null)o['g']=$.GetPublicChatRequest.encode();
	if($.JoinPublicChatRequest!=null)o['j']=$.JoinPublicChatRequest.encode();
	if($.LeavePublicChatRequest!=null)o['l']=$.LeavePublicChatRequest.encode();
	if($.WriteToPublicChatRequest!=null)o['w']=$.WriteToPublicChatRequest.encode();
	if($.GetPublicChatMembersRequest!=null)o['gm']=$.GetPublicChatMembersRequest.encode();
	if($.GetRecentMessagesRequest!=null)o['gr']=$.GetRecentMessagesRequest.encode();
	if($.ListLiveChatsRequest!=null)o['lc']=$.ListLiveChatsRequest.encode();
	if($.ListInterestingChatsRequest!=null)o['li']=$.ListInterestingChatsRequest.encode();
	if($.PublicChatMessageDeliveryPush!=null)o['p']=$.PublicChatMessageDeliveryPush.encode();
	if($.PublicChatTerminatedPush!=null)o['t']=$.PublicChatTerminatedPush.encode();
	return o;
}
_.GetPublicChatRequest=null;
_.JoinPublicChatRequest=null;
_.LeavePublicChatRequest=null;
_.WriteToPublicChatRequest=null;
_.GetPublicChatMembersRequest=null;
_.GetRecentMessagesRequest=null;
_.ListLiveChatsRequest=null;
_.ListInterestingChatsRequest=null;
_.PublicChatMessageDeliveryPush=null;
_.PublicChatTerminatedPush=null;

module.exports=O;
