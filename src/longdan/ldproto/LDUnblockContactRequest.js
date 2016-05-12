var LDJSONLoggable = require('./LDJSONLoggable');

function LDUnblockContactRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ContactAccount=e['c'];
}
LDUnblockContactRequest.prototype=new LDJSONLoggable();
LDUnblockContactRequest.prototype.constructor = LDUnblockContactRequest;
var _=LDUnblockContactRequest.prototype;
_.__type="LDUnblockContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactAccount!=null)o['c']=$.ContactAccount;
	return o;
}
_.ContactAccount=null;
LDUnblockContactRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"c":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnblockContactRequest;
