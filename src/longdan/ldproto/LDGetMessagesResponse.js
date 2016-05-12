var LDJSONLoggable = require('./LDJSONLoggable');
var LDMessage = require('./LDMessage');

function LDGetMessagesResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null){
		$.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.Messages.push(new LDMessage(d[k]));
	}
	$.Partial=e['p'];
}
LDGetMessagesResponse.prototype=new LDJSONLoggable();
LDGetMessagesResponse.prototype.constructor = LDGetMessagesResponse;
var _=LDGetMessagesResponse.prototype;
_.__type="LDGetMessagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Messages!=null) {
		o['m']=[];
		var d=$.Messages;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	if($.Partial!=null)o['p']=$.Partial;
	return o;
}
_.Messages=null;
_.Partial=null;

module.exports=LDGetMessagesResponse;
