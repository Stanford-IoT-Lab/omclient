var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostContainer = require('./LDPostContainer');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.PostId=new LDPostId(e['p']);
	if(e['P']!=null)$.Post=new LDPostContainer(e['P']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDLikeItem";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['p']=$.PostId.encode();
	if($.Post!=null)o['P']=$.Post.encode();
	return o;
}
_.PostId=null;
_.Post=null;

module.exports=O;
