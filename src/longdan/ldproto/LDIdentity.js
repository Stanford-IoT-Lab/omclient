function LDIdentity(e){
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	$.Principal=e['p'];
}
var _=LDIdentity.prototype;
_.__type="LDIdentity";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Type!=null)o['t']=$.Type;
	if($.Principal!=null)o['p']=$.Principal;
	return o;
}
_.Type=null;
_.Principal=null;

module.exports=LDIdentity;
