function O(e){
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['h']!=null)$.Hash=new Buffer(e['h'],'base64');
}
var _=O.prototype;
_.__type="LDIdentityHash";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Type!=null)o['t']=$.Type;
	if($.Hash!=null)o['h']=$.Hash.toString('base64');
	return o;
}
_.Type=null;
_.Hash=null;

module.exports=O;
