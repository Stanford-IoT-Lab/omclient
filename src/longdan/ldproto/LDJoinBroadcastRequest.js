var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDJoinBroadcastRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Pin=e['p'];
}
LDJoinBroadcastRequest.prototype=new LDJSONLoggable();
LDJoinBroadcastRequest.prototype.constructor = LDJoinBroadcastRequest;
var _=LDJoinBroadcastRequest.prototype;
_.__type="LDJoinBroadcastRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Pin!=null)o['p']=$.Pin;
	return o;
}
_.Feed=null;
_.Pin=null;
LDJoinBroadcastRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"B":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDJoinBroadcastRequest;
