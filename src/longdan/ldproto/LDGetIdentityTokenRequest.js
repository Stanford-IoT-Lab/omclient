var LDGetIdentityTokenResponse = require('./LDGetIdentityTokenResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ScopeString=e['s'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetIdentityTokenRequest";
_.__rt=LDGetIdentityTokenResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ScopeString!=null)o['s']=$.ScopeString;
	return o;
}
_.ScopeString=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"g":o};o=t;
	t={"#":id,"t":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
