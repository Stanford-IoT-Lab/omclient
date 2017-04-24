var LDEnum = require('./LDEnum');

function O(e){
	LDEnum.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDEnum();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDFeature";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDEnum.prototype.encode.call($,o);
	return o;
}

module.exports=O;
