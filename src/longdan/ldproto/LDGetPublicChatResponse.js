var LDJSONLoggable = require('./LDJSONLoggable');
var LDPublicChatInfo = require('./LDPublicChatInfo');
var LDFeed = require('./LDFeed');

function LDGetPublicChatResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.PublicChatInfo=new LDPublicChatInfo(e['i']);
}
LDGetPublicChatResponse.prototype=new LDJSONLoggable();
LDGetPublicChatResponse.prototype.constructor = LDGetPublicChatResponse;
var _=LDGetPublicChatResponse.prototype;
_.__type="LDGetPublicChatResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.PublicChatInfo!=null)o['i']=$.PublicChatInfo.encode();
	return o;
}
_.Feed=null;
_.PublicChatInfo=null;

module.exports=LDGetPublicChatResponse;
