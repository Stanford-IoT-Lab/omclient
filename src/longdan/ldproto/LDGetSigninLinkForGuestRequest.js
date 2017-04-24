var LDGetSigninLinkResponse = require('./LDGetSigninLinkResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.RedirectPage=e['r'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	$.Jwt=e['j'];
	$.Account=e['a'];
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.State=e['t'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetSigninLinkForGuestRequest";
_.__rt=LDGetSigninLinkResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.RedirectPage!=null)o['r']=$.RedirectPage;
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	if($.Jwt!=null)o['j']=$.Jwt;
	if($.Account!=null)o['a']=$.Account;
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.State!=null)o['t']=$.State;
	return o;
}
_.RedirectPage=null;
_.Scopes=null;
_.Jwt=null;
_.Account=null;
_.Identity=null;
_.State=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"gs":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
