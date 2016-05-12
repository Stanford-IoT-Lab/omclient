var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDLeavePublicChatRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['n']!=null)$.Nonce=new Buffer(e['n'],'base64');
}
LDLeavePublicChatRequest.prototype=new LDJSONLoggable();
LDLeavePublicChatRequest.prototype.constructor = LDLeavePublicChatRequest;
var _=LDLeavePublicChatRequest.prototype;
_.__type="LDLeavePublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Nonce!=null)o['n']=$.Nonce.toString('base64');
	return o;
}
_.Feed=null;
_.Nonce=null;
LDLeavePublicChatRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"l":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDLeavePublicChatRequest;
