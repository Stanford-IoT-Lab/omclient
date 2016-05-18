var LDStickerPackInfoListingWrapper = require('./LDStickerPackInfoListingWrapper');
var LDAppInfoListingWrapper = require('./LDAppInfoListingWrapper');

function O(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoList=new LDAppInfoListingWrapper(e['ai']);
	if(e['si']!=null)$.StickerPackInfoList=new LDStickerPackInfoListingWrapper(e['si']);
}
var _=O.prototype;
_.__type="LDItemInfoListingContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoList!=null)o['ai']=$.AppInfoList.encode();
	if($.StickerPackInfoList!=null)o['si']=$.StickerPackInfoList.encode();
	return o;
}
_.AppInfoList=null;
_.StickerPackInfoList=null;

module.exports=O;
