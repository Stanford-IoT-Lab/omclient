var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDSetProfilePictureRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
LDSetProfilePictureRequest.prototype=new LDJSONLoggable();
LDSetProfilePictureRequest.prototype.constructor = LDSetProfilePictureRequest;
var _=LDSetProfilePictureRequest.prototype;
_.__type="LDSetProfilePictureRequest";
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
LDSetProfilePictureRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sp":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetProfilePictureRequest;
