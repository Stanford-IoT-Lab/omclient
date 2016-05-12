var LDEnum = require('./LDEnum');

function LDFeature(e){
	LDEnum.call(this,e);
	if(!e)return;
	var $=this;
}
LDFeature.prototype=new LDEnum();
LDFeature.prototype.constructor = LDFeature;
var _=LDFeature.prototype;
_.__type="LDFeature";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDEnum.prototype.encode.call($,o);
	return o;
}

module.exports=LDFeature;
