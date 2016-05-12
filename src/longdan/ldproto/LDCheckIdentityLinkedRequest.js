var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDCheckIdentityLinkedRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.IpAddress=e['p'];
	$.RequestedCluster=e['c'];
}
LDCheckIdentityLinkedRequest.prototype=new LDJSONLoggable();
LDCheckIdentityLinkedRequest.prototype.constructor = LDCheckIdentityLinkedRequest;
var _=LDCheckIdentityLinkedRequest.prototype;
_.__type="LDCheckIdentityLinkedRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	return o;
}
_.IpAddress=null;
_.RequestedCluster=null;
LDCheckIdentityLinkedRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"l":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCheckIdentityLinkedRequest;
