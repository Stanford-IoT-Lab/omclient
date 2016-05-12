var LDJSONLoggable = require('./LDJSONLoggable');

function LDItemId(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Creator=e['c'];
	$.GivenId=e['a'];
}
LDItemId.prototype=new LDJSONLoggable();
LDItemId.prototype.constructor = LDItemId;
var _=LDItemId.prototype;
_.__type="LDItemId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Creator!=null)o['c']=$.Creator;
	if($.GivenId!=null)o['a']=$.GivenId;
	return o;
}
_.ItemType=null;
_.Creator=null;
_.GivenId=null;

module.exports=LDItemId;
