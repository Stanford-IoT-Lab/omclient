function LDJSONLoggable(e){
	if(!e)return;
	var $=this;
}
var _=LDJSONLoggable.prototype;
_.__type="LDJSONLoggable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}

module.exports=LDJSONLoggable;
