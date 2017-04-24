var LDSimpleResponse = require('./LDSimpleResponse');
var LDItemInfoSystemMutableContainer = require('./LDItemInfoSystemMutableContainer');

function O(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['id'];
	if(e['u']!=null)$.ItemInfoSystemMutableContainer=new LDItemInfoSystemMutableContainer(e['u']);
}
var _=O.prototype;
_.__type="LDSystemUpdateItemInfoRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['id']=$.ItemId;
	if($.ItemInfoSystemMutableContainer!=null)o['u']=$.ItemInfoSystemMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoSystemMutableContainer=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"su":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
