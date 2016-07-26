var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Verified=e['v'];
	$.MemberDelta=e['md'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSettableValues";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Verified!=null)o['v']=$.Verified;
	if($.MemberDelta!=null)o['md']=$.MemberDelta;
	return o;
}
_.Verified=null;
_.MemberDelta=null;

module.exports=O;
