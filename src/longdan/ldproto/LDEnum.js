function LDEnum(e){
	if(!e)return;
	var $=this;
}
var _=LDEnum.prototype;
_.__type="LDEnum";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}

module.exports=LDEnum;
