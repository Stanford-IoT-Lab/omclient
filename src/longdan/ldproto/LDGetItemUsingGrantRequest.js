var LDGetItemInfoResponse = require('./LDGetItemInfoResponse');

function LDGetItemUsingGrantRequest(e){
	if(!e)return;
	var $=this;
	$.Grant=e['g'];
}
var _=LDGetItemUsingGrantRequest.prototype;
_.__type="LDGetItemUsingGrantRequest";
_.__rt=LDGetItemInfoResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Grant!=null)o['g']=$.Grant;
	return o;
}
_.Grant=null;
LDGetItemUsingGrantRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gig":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetItemUsingGrantRequest;
