var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AppName=e['n'];
	$.AppIconDirectLink=e['p'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
	$.AuthCode=e['c'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCheckSSOTokenResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AppName!=null)o['n']=$.AppName;
	if($.AppIconDirectLink!=null)o['p']=$.AppIconDirectLink;
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.AuthCode!=null)o['c']=$.AuthCode;
	return o;
}
_.AppName=null;
_.AppIconDirectLink=null;
_.Scopes=null;
_.Identity=null;
_.AuthCode=null;

module.exports=O;
