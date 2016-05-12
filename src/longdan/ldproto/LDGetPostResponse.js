var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostContainer = require('./LDPostContainer');

function LDGetPostResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.Post=new LDPostContainer(e['p']);
}
LDGetPostResponse.prototype=new LDJSONLoggable();
LDGetPostResponse.prototype.constructor = LDGetPostResponse;
var _=LDGetPostResponse.prototype;
_.__type="LDGetPostResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Post!=null)o['p']=$.Post.encode();
	return o;
}
_.Post=null;

module.exports=LDGetPostResponse;
