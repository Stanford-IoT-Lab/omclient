var LDJSONLoggable = require('./LDJSONLoggable');

function LDAppScopeId(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
	$.PackageId=e['p'];
}
LDAppScopeId.prototype=new LDJSONLoggable();
LDAppScopeId.prototype.constructor = LDAppScopeId;
var _=LDAppScopeId.prototype;
_.__type="LDAppScopeId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	if($.PackageId!=null)o['p']=$.PackageId;
	return o;
}
_.AppId=null;
_.PackageId=null;

module.exports=LDAppScopeId;
