var LDJSONLoggable = require('./LDJSONLoggable');
var LDAccountDetails = require('./LDAccountDetails');

function LDAccountDetailsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AccountDetails=new LDAccountDetails(e['a']);
	$.WasLegacy=e['l'];
	if(e['i']!=null)$.AppId=new Buffer(e['i'],'base64');
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
}
LDAccountDetailsResponse.prototype=new LDJSONLoggable();
LDAccountDetailsResponse.prototype.constructor = LDAccountDetailsResponse;
var _=LDAccountDetailsResponse.prototype;
_.__type="LDAccountDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AccountDetails!=null)o['a']=$.AccountDetails.encode();
	if($.WasLegacy!=null)o['l']=$.WasLegacy;
	if($.AppId!=null)o['i']=$.AppId.toString('base64');
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	return o;
}
_.AccountDetails=null;
_.WasLegacy=null;
_.AppId=null;
_.Scopes=null;

module.exports=LDAccountDetailsResponse;
