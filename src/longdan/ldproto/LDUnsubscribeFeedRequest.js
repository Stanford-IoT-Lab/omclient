var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDUnsubscribeFeedRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDUnsubscribeFeedRequest.prototype=new LDJSONLoggable();
LDUnsubscribeFeedRequest.prototype.constructor = LDUnsubscribeFeedRequest;
var _=LDUnsubscribeFeedRequest.prototype;
_.__type="LDUnsubscribeFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
LDUnsubscribeFeedRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"U":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnsubscribeFeedRequest;
