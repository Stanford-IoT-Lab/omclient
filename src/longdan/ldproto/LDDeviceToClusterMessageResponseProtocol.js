var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetPublicFeedDetailsResponse = require('./LDGetPublicFeedDetailsResponse');
var LDGetJoinFeedLinkResponse = require('./LDGetJoinFeedLinkResponse');
var LDGetMessagesWithContinuationResponse = require('./LDGetMessagesWithContinuationResponse');
var LDGetMessagesResponse = require('./LDGetMessagesResponse');
var LDGetMessageResponse = require('./LDGetMessageResponse');

function LDDeviceToClusterMessageResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.GetMessageResponse=new LDGetMessageResponse(e['m']);
	if(e['M']!=null)$.GetMessagesResponse=new LDGetMessagesResponse(e['M']);
	if(e['C']!=null)$.GetMessagesWithContinuationResponse=new LDGetMessagesWithContinuationResponse(e['C']);
	if(e['l']!=null)$.GetJoinFeedLinkResponse=new LDGetJoinFeedLinkResponse(e['l']);
	if(e['gf']!=null)$.GetFeedDetails=new LDGetPublicFeedDetailsResponse(e['gf']);
}
LDDeviceToClusterMessageResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterMessageResponseProtocol.prototype.constructor = LDDeviceToClusterMessageResponseProtocol;
var _=LDDeviceToClusterMessageResponseProtocol.prototype;
_.__type="LDDeviceToClusterMessageResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetMessageResponse!=null)o['m']=$.GetMessageResponse.encode();
	if($.GetMessagesResponse!=null)o['M']=$.GetMessagesResponse.encode();
	if($.GetMessagesWithContinuationResponse!=null)o['C']=$.GetMessagesWithContinuationResponse.encode();
	if($.GetJoinFeedLinkResponse!=null)o['l']=$.GetJoinFeedLinkResponse.encode();
	if($.GetFeedDetails!=null)o['gf']=$.GetFeedDetails.encode();
	return o;
}
_.GetMessageResponse=null;
_.GetMessagesResponse=null;
_.GetMessagesWithContinuationResponse=null;
_.GetJoinFeedLinkResponse=null;
_.GetFeedDetails=null;

module.exports=LDDeviceToClusterMessageResponseProtocol;
