var LDItemInfo = require('./LDItemInfo');

function LDAppInfo(e){
	LDItemInfo.call(this,e);
	if(!e)return;
	var $=this;
}
LDAppInfo.prototype=new LDItemInfo();
LDAppInfo.prototype.constructor = LDAppInfo;
var _=LDAppInfo.prototype;
_.__type="LDAppInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfo.prototype.encode.call($,o);
	return o;
}

module.exports=LDAppInfo;
