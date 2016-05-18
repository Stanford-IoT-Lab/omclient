var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDFeedStateResponse = require('./LDFeedStateResponse');
var LDDirtyFeedsResponse = require('./LDDirtyFeedsResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null)$.DirtyFeeds=new LDDirtyFeedsResponse(e['d']);
	if(e['s']!=null)$.FeedState=new LDFeedStateResponse(e['s']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterInboxResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.DirtyFeeds!=null)o['d']=$.DirtyFeeds.encode();
	if($.FeedState!=null)o['s']=$.FeedState.encode();
	return o;
}
_.DirtyFeeds=null;
_.FeedState=null;

module.exports=O;
