var LDItemInfo = require('./LDItemInfo');

function O(e){
	LDItemInfo.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDItemInfo();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDStickerPackInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfo.prototype.encode.call($,o);
	return o;
}

module.exports=O;
