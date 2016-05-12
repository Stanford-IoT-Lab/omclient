var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDSendDirectMessageResponse = require('./LDSendDirectMessageResponse');
var LDGetDirectFeedResponse = require('./LDGetDirectFeedResponse');

function LDDeviceToClusterDirectMessagingResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['gs']!=null)$.GetSmsFeedResponse=new LDGetDirectFeedResponse(e['gs']);
	if(e['sm']!=null)$.SendSmsMessageResponse=new LDSendDirectMessageResponse(e['sm']);
}
LDDeviceToClusterDirectMessagingResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterDirectMessagingResponseProtocol.prototype.constructor = LDDeviceToClusterDirectMessagingResponseProtocol;
var _=LDDeviceToClusterDirectMessagingResponseProtocol.prototype;
_.__type="LDDeviceToClusterDirectMessagingResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetSmsFeedResponse!=null)o['gs']=$.GetSmsFeedResponse.encode();
	if($.SendSmsMessageResponse!=null)o['sm']=$.SendSmsMessageResponse.encode();
	return o;
}
_.GetSmsFeedResponse=null;
_.SendSmsMessageResponse=null;

module.exports=LDDeviceToClusterDirectMessagingResponseProtocol;
