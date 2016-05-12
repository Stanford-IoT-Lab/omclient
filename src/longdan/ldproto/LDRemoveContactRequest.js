var LDJSONLoggable = require('./LDJSONLoggable');

function LDRemoveContactRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ContactAccount=e['c'];
}
LDRemoveContactRequest.prototype=new LDJSONLoggable();
LDRemoveContactRequest.prototype.constructor = LDRemoveContactRequest;
var _=LDRemoveContactRequest.prototype;
_.__type="LDRemoveContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContactAccount!=null)o['c']=$.ContactAccount;
	return o;
}
_.ContactAccount=null;
LDRemoveContactRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"r":o};o=t;
	t={"#":id,"c":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDRemoveContactRequest;
