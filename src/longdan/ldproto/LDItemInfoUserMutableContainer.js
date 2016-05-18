var LDStickerPackInfoUserMutable = require('./LDStickerPackInfoUserMutable');
var LDAppInfoUserMutable = require('./LDAppInfoUserMutable');

function O(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoUserMutable=new LDAppInfoUserMutable(e['ai']);
	if(e['si']!=null)$.StickerPackInfoUserMutable=new LDStickerPackInfoUserMutable(e['si']);
}
var _=O.prototype;
_.__type="LDItemInfoUserMutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoUserMutable!=null)o['ai']=$.AppInfoUserMutable.encode();
	if($.StickerPackInfoUserMutable!=null)o['si']=$.StickerPackInfoUserMutable.encode();
	return o;
}
_.AppInfoUserMutable=null;
_.StickerPackInfoUserMutable=null;

module.exports=O;
