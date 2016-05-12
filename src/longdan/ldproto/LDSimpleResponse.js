function LDSimpleResponse(e){
	if(!e)return;
	var $=this;
	if(e['v']!=null)$.Value=e['v'];
}
var _=LDSimpleResponse.prototype;
_.__type="LDSimpleResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Value!=null)o['v']=$.Value;
	return o;
}
_.Value=null;

module.exports=LDSimpleResponse;
