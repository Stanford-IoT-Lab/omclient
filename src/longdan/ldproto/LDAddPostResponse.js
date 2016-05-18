var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
	$.ExternalShareLink=e['e'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAddPostResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.ExternalShareLink!=null)o['e']=$.ExternalShareLink;
	return o;
}
_.PostId=null;
_.ExternalShareLink=null;

module.exports=O;
