var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDSetFeedThumbnailRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
LDSetFeedThumbnailRequest.prototype=new LDJSONLoggable();
LDSetFeedThumbnailRequest.prototype.constructor = LDSetFeedThumbnailRequest;
var _=LDSetFeedThumbnailRequest.prototype;
_.__type="LDSetFeedThumbnailRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.BlobLinkString!=null)o['p']=$.BlobLinkString;
	if($.DecryptedHash!=null)o['d']=$.DecryptedHash.toString('base64');
	return o;
}
_.Feed=null;
_.BlobLinkString=null;
_.DecryptedHash=null;
LDSetFeedThumbnailRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"h":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetFeedThumbnailRequest;
