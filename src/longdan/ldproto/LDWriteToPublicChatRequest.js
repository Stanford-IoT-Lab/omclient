var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function LDWriteToPublicChatRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['tid']!=null)$.TypedId=new LDTypedId(e['tid']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Delete=e['d'];
}
LDWriteToPublicChatRequest.prototype=new LDJSONLoggable();
LDWriteToPublicChatRequest.prototype.constructor = LDWriteToPublicChatRequest;
var _=LDWriteToPublicChatRequest.prototype;
_.__type="LDWriteToPublicChatRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.TypedId!=null)o['tid']=$.TypedId.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Delete!=null)o['d']=$.Delete;
	return o;
}
_.Feed=null;
_.TypedId=null;
_.Body=null;
_.Delete=null;
LDWriteToPublicChatRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"w":o};o=t;
	t={"#":id,"pc":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDWriteToPublicChatRequest;
