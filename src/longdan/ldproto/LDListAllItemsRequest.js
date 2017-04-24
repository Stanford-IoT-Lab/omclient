var LDListItemsResponse = require('./LDListItemsResponse');

function O(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
var _=O.prototype;
_.__type="LDListAllItemsRequest";
_.__rt=LDListItemsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.ItemType=null;
_.ContinuationKey=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"la":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
