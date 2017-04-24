var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ServiceType=e['s'];
	$.Key=e['k'];
	$.Account=e['a'];
	$.IpAddress=e['p'];
	$.RequestedCluster=e['c'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDRegisterWithOAuthRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ServiceType!=null)o['s']=$.ServiceType;
	if($.Key!=null)o['k']=$.Key;
	if($.Account!=null)o['a']=$.Account;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	return o;
}
_.ServiceType=null;
_.Key=null;
_.Account=null;
_.IpAddress=null;
_.RequestedCluster=null;
_.Scopes=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"o":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
