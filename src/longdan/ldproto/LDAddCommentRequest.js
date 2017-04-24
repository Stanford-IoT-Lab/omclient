var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
	$.Type=e['i'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAddCommentRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.Type!=null)o['i']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	return o;
}
_.PostId=null;
_.Type=null;
_.Body=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ac":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
