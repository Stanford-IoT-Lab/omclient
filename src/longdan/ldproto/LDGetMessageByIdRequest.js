var LDGetMessageResponse = require('./LDGetMessageResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function LDGetMessageByIdRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.Id=new LDTypedId(e['i']);
}
LDGetMessageByIdRequest.prototype=new LDJSONLoggable();
LDGetMessageByIdRequest.prototype.constructor = LDGetMessageByIdRequest;
var _=LDGetMessageByIdRequest.prototype;
_.__type="LDGetMessageByIdRequest";
_.__rt=LDGetMessageResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	return o;
}
_.Feed=null;
_.Id=null;
LDGetMessageByIdRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"i":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetMessageByIdRequest;
