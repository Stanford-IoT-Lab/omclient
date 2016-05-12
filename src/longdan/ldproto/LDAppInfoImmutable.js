var LDItemInfoImmutable = require('./LDItemInfoImmutable');

function LDAppInfoImmutable(e){
	LDItemInfoImmutable.call(this,e);
	if(!e)return;
	var $=this;
}
LDAppInfoImmutable.prototype=new LDItemInfoImmutable();
LDAppInfoImmutable.prototype.constructor = LDAppInfoImmutable;
var _=LDAppInfoImmutable.prototype;
_.__type="LDAppInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfoImmutable.prototype.encode.call($,o);
	return o;
}

module.exports=LDAppInfoImmutable;
