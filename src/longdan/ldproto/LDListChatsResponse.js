var LDJSONLoggable = require('./LDJSONLoggable');
var LDPublicChatInfo = require('./LDPublicChatInfo');

function LDListChatsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null){
		$.Chats=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)$.Chats.push(new LDPublicChatInfo(d[k]));
	}
}
LDListChatsResponse.prototype=new LDJSONLoggable();
LDListChatsResponse.prototype.constructor = LDListChatsResponse;
var _=LDListChatsResponse.prototype;
_.__type="LDListChatsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Chats!=null) {
		o['c']=[];
		var d=$.Chats;
		for(var k=0;k<d.length;++k) o['c'].push(d[k].encode());
	}
	return o;
}
_.Chats=null;

module.exports=LDListChatsResponse;
