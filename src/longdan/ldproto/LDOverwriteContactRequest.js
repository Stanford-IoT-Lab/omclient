var LDJSONLoggable = require('./LDJSONLoggable');

function LDOverwriteContactRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ContactAccount=e['c'];
}
LDOverwriteContactRequest.prototype=new LDJSONLoggable();
LDOverwriteContactRequest.prototype.constructor = LDOverwriteContactRequest;
var _=LDOverwriteContactRequest.prototype;
_.__type="LDOverwriteContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactAccount!=null)o['c']=$.ContactAccount;
	return o;
}
_.ContactAccount=null;
LDOverwriteContactRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"o":o};o=t;
	t={"#":id,"c":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDOverwriteContactRequest;
