var LDGetLinkedIdentitiesResponse = require('./LDGetLinkedIdentitiesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetLinkedIdentitiesRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
LDGetLinkedIdentitiesRequest.prototype=new LDJSONLoggable();
LDGetLinkedIdentitiesRequest.prototype.constructor = LDGetLinkedIdentitiesRequest;
var _=LDGetLinkedIdentitiesRequest.prototype;
_.__type="LDGetLinkedIdentitiesRequest";
_.__rt=LDGetLinkedIdentitiesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
LDGetLinkedIdentitiesRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"i":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetLinkedIdentitiesRequest;
