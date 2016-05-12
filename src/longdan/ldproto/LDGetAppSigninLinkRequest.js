var LDGetAppSigninLinkResponse = require('./LDGetAppSigninLinkResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetAppSigninLinkRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.RedirectPage=e['r'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	$.LoginServiceType=e['s'];
	$.LoginKey=e['k'];
	$.Flow=e['f'];
	$.IpAddress=e['p'];
	$.Partner=e['P'];
}
LDGetAppSigninLinkRequest.prototype=new LDJSONLoggable();
LDGetAppSigninLinkRequest.prototype.constructor = LDGetAppSigninLinkRequest;
var _=LDGetAppSigninLinkRequest.prototype;
_.__type="LDGetAppSigninLinkRequest";
_.__rt=LDGetAppSigninLinkResponse;
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
	if($.LoginServiceType!=null)o['s']=$.LoginServiceType;
	if($.LoginKey!=null)o['k']=$.LoginKey;
	if($.Flow!=null)o['f']=$.Flow;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.Partner!=null)o['P']=$.Partner;
	return o;
}
_.RedirectPage=null;
_.Scopes=null;
_.LoginServiceType=null;
_.LoginKey=null;
_.Flow=null;
_.IpAddress=null;
_.Partner=null;
LDGetAppSigninLinkRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"s":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetAppSigninLinkRequest;
