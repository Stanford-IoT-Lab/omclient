var LDJSONLoggable = require('./LDJSONLoggable');

function LDAcl(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
}
LDAcl.prototype=new LDJSONLoggable();
LDAcl.prototype.constructor = LDAcl;
var _=LDAcl.prototype;
_.__type="LDAcl";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	return o;
}
_.Type=null;
_.AppId=null;

module.exports=LDAcl;
