var LDListItemsResponse = require('./LDListItemsResponse');

function O(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
}
var _=O.prototype;
_.__type="LDListItemsForAccountRequest";
_.__rt=LDListItemsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	return o;
}
_.ItemType=null;
_.Account=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"lc":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
