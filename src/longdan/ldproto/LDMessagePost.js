var LDPost = require('./LDPost');

function LDMessagePost(e){
	LDPost.call(this,e);
	if(!e)return;
	var $=this;
	$.Message=e['d'];
}
LDMessagePost.prototype=new LDPost();
LDMessagePost.prototype.constructor = LDMessagePost;
var _=LDMessagePost.prototype;
_.__type="LDMessagePost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPost.prototype.encode.call($,o);
	if($.Message!=null)o['d']=$.Message;
	return o;
}
_.Message=null;

module.exports=LDMessagePost;
