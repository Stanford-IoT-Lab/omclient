var LDCheckSSOTokenResponse = require('./LDCheckSSOTokenResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Token=e['t'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCheckSSOTokenRequest";
_.__rt=LDCheckSSOTokenResponse;
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
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"cs":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
