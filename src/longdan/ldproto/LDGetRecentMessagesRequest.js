var LDGetRecentMessagesResponse = require('./LDGetRecentMessagesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDGetRecentMessagesRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Timestamp=e['t'];
}
LDGetRecentMessagesRequest.prototype=new LDJSONLoggable();
LDGetRecentMessagesRequest.prototype.constructor = LDGetRecentMessagesRequest;
var _=LDGetRecentMessagesRequest.prototype;
_.__type="LDGetRecentMessagesRequest";
_.__rt=LDGetRecentMessagesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Timestamp!=null)o['t']=$.Timestamp;
	return o;
}
_.Feed=null;
_.Timestamp=null;
LDGetRecentMessagesRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gr":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetRecentMessagesRequest;
