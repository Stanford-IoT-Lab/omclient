var LDItemId = require('./LDItemId');

function LDItemInfoImmutable(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new LDItemId(e['id']);
}
var _=LDItemInfoImmutable.prototype;
_.__type="LDItemInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;

module.exports=LDItemInfoImmutable;
