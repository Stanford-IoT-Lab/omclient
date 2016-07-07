var LDGetCommentsResponse = require('./LDGetCommentsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
	$.NumToGet=e['n'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCommentsRequest";
_.__rt=LDGetCommentsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.NumToGet!=null)o['n']=$.NumToGet;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.PostId=null;
_.NumToGet=null;
_.ContinuationKey=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gc":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
