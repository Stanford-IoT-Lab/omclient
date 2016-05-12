var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDMutualAddContactByTokenRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Token=e['t'];
}
LDMutualAddContactByTokenRequest.prototype=new LDJSONLoggable();
LDMutualAddContactByTokenRequest.prototype.constructor = LDMutualAddContactByTokenRequest;
var _=LDMutualAddContactByTokenRequest.prototype;
_.__type="LDMutualAddContactByTokenRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Account=null;
_.Token=null;
LDMutualAddContactByTokenRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"m":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDMutualAddContactByTokenRequest;
