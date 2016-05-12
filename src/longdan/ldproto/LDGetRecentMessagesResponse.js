var LDJSONLoggable = require('./LDJSONLoggable');
var LDMessage = require('./LDMessage');

function LDGetRecentMessagesResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null){
		$.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.Messages.push(new LDMessage(d[k]));
	}
}
LDGetRecentMessagesResponse.prototype=new LDJSONLoggable();
LDGetRecentMessagesResponse.prototype.constructor = LDGetRecentMessagesResponse;
var _=LDGetRecentMessagesResponse.prototype;
_.__type="LDGetRecentMessagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Messages!=null) {
		o['m']=[];
		var d=$.Messages;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	return o;
}
_.Messages=null;

module.exports=LDGetRecentMessagesResponse;
