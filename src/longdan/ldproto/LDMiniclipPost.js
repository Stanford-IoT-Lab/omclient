var LDVideoBasePost = require('./LDVideoBasePost');

function O(e){
	LDVideoBasePost.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDVideoBasePost();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDMiniclipPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDVideoBasePost.prototype.encode.call($,o);
	return o;
}

module.exports=O;
