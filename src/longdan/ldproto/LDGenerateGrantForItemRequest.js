var LDGenerateGrantForItemResponse = require('./LDGenerateGrantForItemResponse');
var LDItemId = require('./LDItemId');

function O(e){
	if(!e)return;
	var $=this;
	if(e['ii']!=null)$.ItemId=new LDItemId(e['ii']);
	$.ExpirationTime=e['e'];
}
var _=O.prototype;
_.__type="LDGenerateGrantForItemRequest";
_.__rt=LDGenerateGrantForItemResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['ii']=$.ItemId.encode();
	if($.ExpirationTime!=null)o['e']=$.ExpirationTime;
	return o;
}
_.ItemId=null;
_.ExpirationTime=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gg":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
