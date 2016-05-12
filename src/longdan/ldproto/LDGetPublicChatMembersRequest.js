var LDGetPublicChatMembersResponse = require('./LDGetPublicChatMembersResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDGetPublicChatMembersRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDGetPublicChatMembersRequest.prototype=new LDJSONLoggable();
LDGetPublicChatMembersRequest.prototype.constructor = LDGetPublicChatMembersRequest;
var _=LDGetPublicChatMembersRequest.prototype;
_.__type="LDGetPublicChatMembersRequest";
_.__rt=LDGetPublicChatMembersResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
LDGetPublicChatMembersRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gm":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetPublicChatMembersRequest;
