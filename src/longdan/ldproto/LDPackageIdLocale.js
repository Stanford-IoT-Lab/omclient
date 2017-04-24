function O(e){
	if(!e)return;
	var $=this;
	$.PackageId=e['p'];
	$.Locale=e['l'];
}
var _=O.prototype;
_.__type="LDPackageIdLocale";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Locale!=null)o['l']=$.Locale;
	return o;
}
_.PackageId=null;
_.Locale=null;

module.exports=O;
