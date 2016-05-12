function LDPushKey(e){
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	$.Key=e['k'];
}
var _=LDPushKey.prototype;
_.__type="LDPushKey";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Type!=null)o['t']=$.Type;
	if($.Key!=null)o['k']=$.Key;
	return o;
}
_.Type=null;
_.Key=null;

module.exports=LDPushKey;
