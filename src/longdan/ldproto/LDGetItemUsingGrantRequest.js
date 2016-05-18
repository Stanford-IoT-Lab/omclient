var LDGetItemInfoResponse = require('./LDGetItemInfoResponse');

function O(e){
	if(!e)return;
	var $=this;
	$.Grant=e['g'];
}
var _=O.prototype;
_.__type="LDGetItemUsingGrantRequest";
_.__rt=LDGetItemInfoResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Grant!=null)o['g']=$.Grant;
	return o;
}
_.Grant=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gig":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
