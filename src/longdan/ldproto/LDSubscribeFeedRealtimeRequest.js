var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDSubscribeFeedRealtimeRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDSubscribeFeedRealtimeRequest.prototype=new LDJSONLoggable();
LDSubscribeFeedRealtimeRequest.prototype.constructor = LDSubscribeFeedRealtimeRequest;
var _=LDSubscribeFeedRealtimeRequest.prototype;
_.__type="LDSubscribeFeedRealtimeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
LDSubscribeFeedRealtimeRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"l":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSubscribeFeedRealtimeRequest;
