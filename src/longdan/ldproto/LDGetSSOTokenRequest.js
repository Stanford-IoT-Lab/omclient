var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetSSOTokenRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
}
LDGetSSOTokenRequest.prototype=new LDJSONLoggable();
LDGetSSOTokenRequest.prototype.constructor = LDGetSSOTokenRequest;
var _=LDGetSSOTokenRequest.prototype;
_.__type="LDGetSSOTokenRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	return o;
}
_.Scopes=null;
LDGetSSOTokenRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"so":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetSSOTokenRequest;
