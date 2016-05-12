var LDJSONLoggable = require('./LDJSONLoggable');
var LDJoinFeedLink = require('./LDJoinFeedLink');

function LDGetJoinFeedLinkResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null)$.JoinLink=new LDJoinFeedLink(e['l']);
}
LDGetJoinFeedLinkResponse.prototype=new LDJSONLoggable();
LDGetJoinFeedLinkResponse.prototype.constructor = LDGetJoinFeedLinkResponse;
var _=LDGetJoinFeedLinkResponse.prototype;
_.__type="LDGetJoinFeedLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.JoinLink!=null)o['l']=$.JoinLink.encode();
	return o;
}
_.JoinLink=null;

module.exports=LDGetJoinFeedLinkResponse;
