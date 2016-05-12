var LDStickerPackInfoSystemMutable = require('./LDStickerPackInfoSystemMutable');
var LDAppInfoSystemMutable = require('./LDAppInfoSystemMutable');

function LDItemInfoSystemMutableContainer(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoSystemMutable=new LDAppInfoSystemMutable(e['ai']);
	if(e['ii']!=null)$.StickerPackInfoSystemMutable=new LDStickerPackInfoSystemMutable(e['ii']);
}
var _=LDItemInfoSystemMutableContainer.prototype;
_.__type="LDItemInfoSystemMutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoSystemMutable!=null)o['ai']=$.AppInfoSystemMutable.encode();
	if($.StickerPackInfoSystemMutable!=null)o['ii']=$.StickerPackInfoSystemMutable.encode();
	return o;
}
_.AppInfoSystemMutable=null;
_.StickerPackInfoSystemMutable=null;

module.exports=LDItemInfoSystemMutableContainer;
