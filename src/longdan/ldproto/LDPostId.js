var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Poster=e['a'];
	if(e['id']!=null)$.PostId=new Buffer(e['id'],'base64');
	$.PostType=e['t'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Poster!=null)o['a']=$.Poster;
	if($.PostId!=null)o['id']=$.PostId.toString('base64');
	if($.PostType!=null)o['t']=$.PostType;
	return o;
}
_.Poster=null;
_.PostId=null;
_.PostType=null;

module.exports=O;
