var LDGenerateApiKeyResponse = require('./LDGenerateApiKeyResponse');
var LDItemId = require('./LDItemId');

function LDGenerateApiKeyRequest(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new LDItemId(e['id']);
}
var _=LDGenerateApiKeyRequest.prototype;
_.__type="LDGenerateApiKeyRequest";
_.__rt=LDGenerateApiKeyResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
LDGenerateApiKeyRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gk":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGenerateApiKeyRequest;
