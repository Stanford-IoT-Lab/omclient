var LDEnum = require('./LDEnum');

function LDAccessScope(e){
	LDEnum.call(this,e);
	if(!e)return;
	var $=this;
}
LDAccessScope.prototype=new LDEnum();
LDAccessScope.prototype.constructor = LDAccessScope;
var _=LDAccessScope.prototype;
_.__type="LDAccessScope";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDEnum.prototype.encode.call($,o);
	return o;
}

module.exports=LDAccessScope;
