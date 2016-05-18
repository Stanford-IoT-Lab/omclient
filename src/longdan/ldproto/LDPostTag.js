var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.TagType=e['tt'];
	$.Tag=e['t'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostTag";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.TagType!=null)o['tt']=$.TagType;
	if($.Tag!=null)o['t']=$.Tag;
	return o;
}
_.TagType=null;
_.Tag=null;

module.exports=O;
