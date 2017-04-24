function O(e){
	if(!e)return;
	var $=this;
	if(e['h']!=null)$.Hash=new Buffer(e['h'],'base64');
	$.Size=e['s'];
	$.MimeType=e['m'];
}
var _=O.prototype;
_.__type="LDBlobMetadata";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Hash!=null)o['h']=$.Hash.toString('base64');
	if($.Size!=null)o['s']=$.Size;
	if($.MimeType!=null)o['m']=$.MimeType;
	return o;
}
_.Hash=null;
_.Size=null;
_.MimeType=null;

module.exports=O;
