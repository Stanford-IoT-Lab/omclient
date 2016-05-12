var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDPublicChatMessageTerminatedPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDPublicChatMessageTerminatedPush.prototype=new LDJSONLoggable();
LDPublicChatMessageTerminatedPush.prototype.constructor = LDPublicChatMessageTerminatedPush;
var _=LDPublicChatMessageTerminatedPush.prototype;
_.__type="LDPublicChatMessageTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;

module.exports=LDPublicChatMessageTerminatedPush;
