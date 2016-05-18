var LDGetSigninLinkResponse = require('./LDGetSigninLinkResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

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
	$.IpAddress=e['p'];
	$.RequestedCluster=e['c'];
	$.Jwt=e['j'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetSigninLinkRequest";
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
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	if($.Jwt!=null)o['j']=$.Jwt;
	return o;
}
_.RedirectPage=null;
_.Scopes=null;
_.IpAddress=null;
_.RequestedCluster=null;
_.Jwt=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"S":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
