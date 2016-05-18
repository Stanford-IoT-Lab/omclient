var LDSimpleResponse = require('./LDSimpleResponse');
var LDItemInfoUserMutableContainer = require('./LDItemInfoUserMutableContainer');

function O(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['ai'];
	if(e['u']!=null)$.ItemInfoUserMutableContainer=new LDItemInfoUserMutableContainer(e['u']);
}
var _=O.prototype;
_.__type="LDUserUpdateItemInfoRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['ai']=$.ItemId;
	if($.ItemInfoUserMutableContainer!=null)o['u']=$.ItemInfoUserMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoUserMutableContainer=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"uu":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
