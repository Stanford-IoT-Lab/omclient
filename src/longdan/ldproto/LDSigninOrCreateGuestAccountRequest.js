var LDSigninOrCreateGuestAccountResponse = require('./LDSigninOrCreateGuestAccountResponse');
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
	$.Jwt=e['j'];
	$.SuggestId=e['s'];
	$.RequestedCluster=e['c'];
	$.IpAddress=e['p'];
	$.State=e['t'];
	$.ErrorWhenUserConfirm=e['eu'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSigninOrCreateGuestAccountRequest";
_.__rt=LDSigninOrCreateGuestAccountResponse;
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
	if($.SuggestId!=null)o['s']=$.SuggestId;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.State!=null)o['t']=$.State;
	if($.ErrorWhenUserConfirm!=null)o['eu']=$.ErrorWhenUserConfirm;
	return o;
}
_.RedirectPage=null;
_.Scopes=null;
_.Jwt=null;
_.SuggestId=null;
_.RequestedCluster=null;
_.IpAddress=null;
_.State=null;
_.ErrorWhenUserConfirm=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"sc":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
