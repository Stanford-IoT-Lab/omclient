function LDPrice(e){
	if(!e)return;
	var $=this;
	$.Free=e['f'];
	$.Usd=e['usd'];
}
var _=LDPrice.prototype;
_.__type="LDPrice";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Free!=null)o['f']=$.Free;
	if($.Usd!=null)o['usd']=$.Usd;
	return o;
}
_.Free=null;
_.Usd=null;

module.exports=LDPrice;
