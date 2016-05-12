var LDGetItemInfoResponse = require('./LDGetItemInfoResponse');
var LDItemId = require('./LDItemId');

function LDGetItemInfoRequest(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new LDItemId(e['id']);
}
var _=LDGetItemInfoRequest.prototype;
_.__type="LDGetItemInfoRequest";
_.__rt=LDGetItemInfoResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
LDGetItemInfoRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ga":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetItemInfoRequest;
