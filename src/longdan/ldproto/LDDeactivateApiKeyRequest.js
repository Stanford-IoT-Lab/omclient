var LDSimpleResponse = require('./LDSimpleResponse');

function O(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ClientApiKeyId=new Buffer(e['id'],'base64');
}
var _=O.prototype;
_.__type="LDDeactivateApiKeyRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ClientApiKeyId!=null)o['id']=$.ClientApiKeyId.toString('base64');
	return o;
}
_.ClientApiKeyId=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"dk":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
