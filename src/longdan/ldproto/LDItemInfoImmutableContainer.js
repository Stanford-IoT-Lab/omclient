var LDStickerPackInfoImmutable = require('./LDStickerPackInfoImmutable');
var LDAppInfoImmutable = require('./LDAppInfoImmutable');

function O(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoImmutable=new LDAppInfoImmutable(e['ai']);
	if(e['si']!=null)$.StickerPackInfoImmutable=new LDStickerPackInfoImmutable(e['si']);
}
var _=O.prototype;
_.__type="LDItemInfoImmutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoImmutable!=null)o['ai']=$.AppInfoImmutable.encode();
	if($.StickerPackInfoImmutable!=null)o['si']=$.StickerPackInfoImmutable.encode();
	return o;
}
_.AppInfoImmutable=null;
_.StickerPackInfoImmutable=null;

module.exports=O;
