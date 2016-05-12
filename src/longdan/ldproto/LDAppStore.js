function LDAppStore(e){
	if(!e)return;
	var $=this;
	$.PackageName=e['e'];
	$.Url=e['d'];
}
var _=LDAppStore.prototype;
_.__type="LDAppStore";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.PackageName!=null)o['e']=$.PackageName;
	if($.Url!=null)o['d']=$.Url;
	return o;
}
_.PackageName=null;
_.Url=null;

module.exports=LDAppStore;
