var LDStickerPackInfo = require('./LDStickerPackInfo');
var LDAppInfo = require('./LDAppInfo');

function LDItemInfoContainer(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfo=new LDAppInfo(e['ai']);
	if(e['si']!=null)$.StickerPackInfo=new LDStickerPackInfo(e['si']);
}
var _=LDItemInfoContainer.prototype;
_.__type="LDItemInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfo!=null)o['ai']=$.AppInfo.encode();
	if($.StickerPackInfo!=null)o['si']=$.StickerPackInfo.encode();
	return o;
}
_.AppInfo=null;
_.StickerPackInfo=null;

module.exports=LDItemInfoContainer;
