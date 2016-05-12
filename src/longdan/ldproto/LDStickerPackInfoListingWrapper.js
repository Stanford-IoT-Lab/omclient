var LDStickerPackInfo = require('./LDStickerPackInfo');

function LDStickerPackInfoListingWrapper(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new LDStickerPackInfo(d[k]));
	}
	if(e['nt']!=null)$.NextToken=new Buffer(e['nt'],'base64');
}
var _=LDStickerPackInfoListingWrapper.prototype;
_.__type="LDStickerPackInfoListingWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.NextToken!=null)o['nt']=$.NextToken.toString('base64');
	return o;
}
_.Items=null;
_.NextToken=null;

module.exports=LDStickerPackInfoListingWrapper;
