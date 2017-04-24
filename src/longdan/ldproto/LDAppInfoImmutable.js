var LDItemInfoImmutable = require('./LDItemInfoImmutable');

function O(e){
	LDItemInfoImmutable.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDItemInfoImmutable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAppInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfoImmutable.prototype.encode.call($,o);
	return o;
}

module.exports=O;
