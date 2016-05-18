var LDItemInfoUserMutable = require('./LDItemInfoUserMutable');
var LDSticker = require('./LDSticker');

function O(e){
	LDItemInfoUserMutable.call(this,e);
	if(!e)return;
	var $=this;
	$.Languages=e['lc'];
	if(e['tg']!=null){
		$.Tags=[];
		var d = e['tg'];
		for(var k=0;k<d.length;++k)$.Tags.push(d[k]);
	}
	$.Name=e['n'];
	if(e['nt']!=null){
		$.NameTranslations = {};
		var d = e['nt'];
		for(var k in d) $.NameTranslations[k]=d[k];
	}
	$.Description=e['d'];
	if(e['dt']!=null){
		$.DescriptionTranslations = {};
		var d = e['dt'];
		for(var k in d) $.DescriptionTranslations[k]=d[k];
	}
	$.PortraitPreviewPackLink=e['p'];
	$.LandscapePreviewPackLink=e['pl'];
	if(e['pdh']!=null)$.PortraitEncryptedPreviewHash=new Buffer(e['pdh'],'base64');
	if(e['pdhl']!=null)$.LandscapeEncryptedPreviewHash=new Buffer(e['pdhl'],'base64');
	if(e['s']!=null){
		$.Stickers=[];
		var d = e['s'];
		for(var k=0; k<d.length;++k)$.Stickers.push(new LDSticker(d[k]));
	}
	$.OriginalPublisher=e['op'];
}
O.prototype=new LDItemInfoUserMutable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDStickerPackInfoUserMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDItemInfoUserMutable.prototype.encode.call($,o);
	if($.Languages!=null)o['lc']=$.Languages;
	if($.Tags!=null) {
		o['tg']=[];
		var d=$.Tags;
		for(var k=0;k<d.length;++k) o['tg'].push(d[k]);
	}
	if($.Name!=null)o['n']=$.Name;
	if($.NameTranslations!=null){
		o['nt']={};
		var d=$.NameTranslations;
		for(var k in d)o['nt'][k]=d[k];
	}
	if($.Description!=null)o['d']=$.Description;
	if($.DescriptionTranslations!=null){
		o['dt']={};
		var d=$.DescriptionTranslations;
		for(var k in d)o['dt'][k]=d[k];
	}
	if($.PortraitPreviewPackLink!=null)o['p']=$.PortraitPreviewPackLink;
	if($.LandscapePreviewPackLink!=null)o['pl']=$.LandscapePreviewPackLink;
	if($.PortraitEncryptedPreviewHash!=null)o['pdh']=$.PortraitEncryptedPreviewHash.toString('base64');
	if($.LandscapeEncryptedPreviewHash!=null)o['pdhl']=$.LandscapeEncryptedPreviewHash.toString('base64');
	if($.Stickers!=null) {
		o['s']=[];
		var d=$.Stickers;
		for(var k=0;k<d.length;++k) o['s'].push(d[k].encode());
	}
	if($.OriginalPublisher!=null)o['op']=$.OriginalPublisher;
	return o;
}
_.Languages=null;
_.Tags=null;
_.Name=null;
_.NameTranslations=null;
_.Description=null;
_.DescriptionTranslations=null;
_.PortraitPreviewPackLink=null;
_.LandscapePreviewPackLink=null;
_.PortraitEncryptedPreviewHash=null;
_.LandscapeEncryptedPreviewHash=null;
_.Stickers=null;
_.OriginalPublisher=null;

module.exports=O;
