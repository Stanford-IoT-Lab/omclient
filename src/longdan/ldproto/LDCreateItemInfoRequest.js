var LDSimpleResponse = require('./LDSimpleResponse');
var LDItemInfoUserMutableContainer = require('./LDItemInfoUserMutableContainer');

function LDCreateItemInfoRequest(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['id'];
	if(e['u']!=null)$.ItemInfoUserMutableContainer=new LDItemInfoUserMutableContainer(e['u']);
}
var _=LDCreateItemInfoRequest.prototype;
_.__type="LDCreateItemInfoRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['id']=$.ItemId;
	if($.ItemInfoUserMutableContainer!=null)o['u']=$.ItemInfoUserMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoUserMutableContainer=null;
LDCreateItemInfoRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"cr":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCreateItemInfoRequest;
