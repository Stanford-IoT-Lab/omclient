var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDSubscribeFeedRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDSubscribeFeedRequest.prototype=new LDJSONLoggable();
LDSubscribeFeedRequest.prototype.constructor = LDSubscribeFeedRequest;
var _=LDSubscribeFeedRequest.prototype;
_.__type="LDSubscribeFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
LDSubscribeFeedRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"S":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSubscribeFeedRequest;
