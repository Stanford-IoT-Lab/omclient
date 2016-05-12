var LDGetMessageResponse = require('./LDGetMessageResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function LDApplyDocumentTransformRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['i']!=null)$.Id=new LDTypedId(e['i']);
	$.Javascript=e['j'];
	$.Parameters=e['p'];
}
LDApplyDocumentTransformRequest.prototype=new LDJSONLoggable();
LDApplyDocumentTransformRequest.prototype.constructor = LDApplyDocumentTransformRequest;
var _=LDApplyDocumentTransformRequest.prototype;
_.__type="LDApplyDocumentTransformRequest";
_.__rt=LDGetMessageResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Javascript!=null)o['j']=$.Javascript;
	if($.Parameters!=null)o['p']=$.Parameters;
	return o;
}
_.Feed=null;
_.Id=null;
_.Javascript=null;
_.Parameters=null;
LDApplyDocumentTransformRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"D":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDApplyDocumentTransformRequest;
