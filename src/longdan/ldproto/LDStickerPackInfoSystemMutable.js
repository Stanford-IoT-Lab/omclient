var LDItemInfoSystemMutable = require('./LDItemInfoSystemMutable');

function O(e){
	LDItemInfoSystemMutable.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDItemInfoSystemMutable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDStickerPackInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfoSystemMutable.prototype.encode.call($,o);
	return o;
}

module.exports=O;
