var LDJSONLoggable = require('./LDJSONLoggable');

function LDTypedId(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['i']!=null)$.Id=new Buffer(e['i'],'base64');
}
LDTypedId.prototype=new LDJSONLoggable();
LDTypedId.prototype.constructor = LDTypedId;
var _=LDTypedId.prototype;
_.__type="LDTypedId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	if($.Id!=null)o['i']=$.Id.toString('base64');
	return o;
}
_.Type=null;
_.Id=null;

module.exports=LDTypedId;
