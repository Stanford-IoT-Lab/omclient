var LDItemInfoSystemMutable = require('./LDItemInfoSystemMutable');

function LDAppInfoSystemMutable(e){
	LDItemInfoSystemMutable.call(this,e);
	if(!e)return;
	var $=this;
}
LDAppInfoSystemMutable.prototype=new LDItemInfoSystemMutable();
LDAppInfoSystemMutable.prototype.constructor = LDAppInfoSystemMutable;
var _=LDAppInfoSystemMutable.prototype;
_.__type="LDAppInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfoSystemMutable.prototype.encode.call($,o);
	return o;
}

module.exports=LDAppInfoSystemMutable;
