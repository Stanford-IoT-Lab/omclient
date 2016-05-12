function LDString(e){
	if(!e)return;
	var $=this;
}
var _=LDString.prototype;
_.__type="LDString";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}

module.exports=LDString;
