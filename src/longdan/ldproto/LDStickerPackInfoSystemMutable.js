var LDItemInfoSystemMutable = require('./LDItemInfoSystemMutable');

function LDStickerPackInfoSystemMutable(e){
	LDItemInfoSystemMutable.call(this,e);
	if(!e)return;
	var $=this;
}
LDStickerPackInfoSystemMutable.prototype=new LDItemInfoSystemMutable();
LDStickerPackInfoSystemMutable.prototype.constructor = LDStickerPackInfoSystemMutable;
var _=LDStickerPackInfoSystemMutable.prototype;
_.__type="LDStickerPackInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfoSystemMutable.prototype.encode.call($,o);
	return o;
}

module.exports=LDStickerPackInfoSystemMutable;
