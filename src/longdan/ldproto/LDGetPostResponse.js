var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostContainer = require('./LDPostContainer');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.Post=new LDPostContainer(e['p']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPostResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Post!=null)o['p']=$.Post.encode();
	return o;
}
_.Post=null;

module.exports=O;
