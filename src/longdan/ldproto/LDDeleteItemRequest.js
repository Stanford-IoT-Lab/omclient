var LDSimpleResponse = require('./LDSimpleResponse');

function O(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['id'];
}
var _=O.prototype;
_.__type="LDDeleteItemRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['id']=$.ItemId;
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"de":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
