var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDSetProfileVideoRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
LDSetProfileVideoRequest.prototype=new LDJSONLoggable();
LDSetProfileVideoRequest.prototype.constructor = LDSetProfileVideoRequest;
var _=LDSetProfileVideoRequest.prototype;
_.__type="LDSetProfileVideoRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['p']=$.BlobLinkString;
	if($.DecryptedHash!=null)o['d']=$.DecryptedHash.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.DecryptedHash=null;
LDSetProfileVideoRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sv":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetProfileVideoRequest;
