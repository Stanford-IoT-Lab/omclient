var LDGetCheckSigninLinkResponse = require('./LDGetCheckSigninLinkResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.RedirectPage=e['r'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCheckSigninLinkRequest";
_.__rt=LDGetCheckSigninLinkResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.RedirectPage!=null)o['r']=$.RedirectPage;
	return o;
}
_.RedirectPage=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"csl":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
