var LDSimpleResponse = require('./LDSimpleResponse');
var LDItemId = require('./LDItemId');

function LDUnpublishItemRequest(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ItemId=new LDItemId(e['i']);
}
var _=LDUnpublishItemRequest.prototype;
_.__type="LDUnpublishItemRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
LDUnpublishItemRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"un":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnpublishItemRequest;
