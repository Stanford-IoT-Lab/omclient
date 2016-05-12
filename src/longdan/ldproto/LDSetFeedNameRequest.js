var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDSetFeedNameRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Name=e['n'];
}
LDSetFeedNameRequest.prototype=new LDJSONLoggable();
LDSetFeedNameRequest.prototype.constructor = LDSetFeedNameRequest;
var _=LDSetFeedNameRequest.prototype;
_.__type="LDSetFeedNameRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Name!=null)o['n']=$.Name;
	return o;
}
_.Feed=null;
_.Name=null;
LDSetFeedNameRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"n":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetFeedNameRequest;
