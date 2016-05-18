function O(e){
	if(!e)return;
	var $=this;
	$.Commenter=e['ct'];
	if(e['c']!=null)$.Comment=new Buffer(e['c'],'base64');
}
var _=O.prototype;
_.__type="LDComment";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Commenter!=null)o['ct']=$.Commenter;
	if($.Comment!=null)o['c']=$.Comment.toString('base64');
	return o;
}
_.Commenter=null;
_.Comment=null;

module.exports=O;
