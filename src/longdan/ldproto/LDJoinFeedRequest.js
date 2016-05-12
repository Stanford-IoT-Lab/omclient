var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDJoinFeedRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Pin=e['p'];
}
LDJoinFeedRequest.prototype=new LDJSONLoggable();
LDJoinFeedRequest.prototype.constructor = LDJoinFeedRequest;
var _=LDJoinFeedRequest.prototype;
_.__type="LDJoinFeedRequest";
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
LDJoinFeedRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"J":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDJoinFeedRequest;
