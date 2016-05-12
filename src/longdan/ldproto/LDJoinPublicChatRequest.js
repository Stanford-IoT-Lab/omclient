var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDJoinPublicChatRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.DisplayName=e['n'];
}
LDJoinPublicChatRequest.prototype=new LDJSONLoggable();
LDJoinPublicChatRequest.prototype.constructor = LDJoinPublicChatRequest;
var _=LDJoinPublicChatRequest.prototype;
_.__type="LDJoinPublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.DisplayName!=null)o['n']=$.DisplayName;
	return o;
}
_.Feed=null;
_.DisplayName=null;
LDJoinPublicChatRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"j":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDJoinPublicChatRequest;
