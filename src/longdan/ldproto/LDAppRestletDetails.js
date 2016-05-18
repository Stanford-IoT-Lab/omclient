function O(e){
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.NameTranslations=e['nt'];
	$.Description=e['d'];
	$.DescriptionTranslations=e['dt'];
	$.IOSStoreUrl=e['sui'];
	$.AndroidStoreUrl=e['sua'];
	$.AndroidPackageName=e['apn'];
	$.IconBlobLinkString=e['ibls'];
	if(e['ssl']!=null){
		$.ScreenShotLinks=[];
		var d = e['ssl'];
		for(var k=0;k<d.length;++k)$.ScreenShotLinks.push(d[k]);
	}
}
var _=O.prototype;
_.__type="LDAppRestletDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Name!=null)o['n']=$.Name;
	if($.NameTranslations!=null)o['nt']=$.NameTranslations;
	if($.Description!=null)o['d']=$.Description;
	if($.DescriptionTranslations!=null)o['dt']=$.DescriptionTranslations;
	if($.IOSStoreUrl!=null)o['sui']=$.IOSStoreUrl;
	if($.AndroidStoreUrl!=null)o['sua']=$.AndroidStoreUrl;
	if($.AndroidPackageName!=null)o['apn']=$.AndroidPackageName;
	if($.IconBlobLinkString!=null)o['ibls']=$.IconBlobLinkString;
	if($.ScreenShotLinks!=null) {
		o['ssl']=[];
		var d=$.ScreenShotLinks;
		for(var k=0;k<d.length;++k) o['ssl'].push(d[k]);
	}
	return o;
}
_.Name=null;
_.NameTranslations=null;
_.Description=null;
_.DescriptionTranslations=null;
_.IOSStoreUrl=null;
_.AndroidStoreUrl=null;
_.AndroidPackageName=null;
_.IconBlobLinkString=null;
_.ScreenShotLinks=null;

module.exports=O;
