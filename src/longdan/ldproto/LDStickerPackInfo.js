var LDItemInfo = require('./LDItemInfo');

function LDStickerPackInfo(e){
	LDItemInfo.call(this,e);
	if(!e)return;
	var $=this;
}
LDStickerPackInfo.prototype=new LDItemInfo();
LDStickerPackInfo.prototype.constructor = LDStickerPackInfo;
var _=LDStickerPackInfo.prototype;
_.__type="LDStickerPackInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfo.prototype.encode.call($,o);
	return o;
}

module.exports=LDStickerPackInfo;
