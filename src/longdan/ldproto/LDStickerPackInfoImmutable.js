var LDItemInfoImmutable = require('./LDItemInfoImmutable');

function LDStickerPackInfoImmutable(e){
	LDItemInfoImmutable.call(this,e);
	if(!e)return;
	var $=this;
}
LDStickerPackInfoImmutable.prototype=new LDItemInfoImmutable();
LDStickerPackInfoImmutable.prototype.constructor = LDStickerPackInfoImmutable;
var _=LDStickerPackInfoImmutable.prototype;
_.__type="LDStickerPackInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfoImmutable.prototype.encode.call($,o);
	return o;
}

module.exports=LDStickerPackInfoImmutable;
