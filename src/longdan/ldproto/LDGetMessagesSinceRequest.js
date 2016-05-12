var LDGetMessagesResponse = require('./LDGetMessagesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDGetMessagesSinceRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Timestamp=e['t'];
}
LDGetMessagesSinceRequest.prototype=new LDJSONLoggable();
LDGetMessagesSinceRequest.prototype.constructor = LDGetMessagesSinceRequest;
var _=LDGetMessagesSinceRequest.prototype;
_.__type="LDGetMessagesSinceRequest";
_.__rt=LDGetMessagesResponse;
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
LDGetMessagesSinceRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"s":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetMessagesSinceRequest;
