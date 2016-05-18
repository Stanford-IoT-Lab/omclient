var LDPost = require('./LDPost');

function O(e){
	LDPost.call(this,e);
	if(!e)return;
	var $=this;
	$.Message=e['d'];
}
O.prototype=new LDPost();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDMessagePost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPost.prototype.encode.call($,o);
	if($.Message!=null)o['d']=$.Message;
	return o;
}
_.Message=null;

module.exports=O;
