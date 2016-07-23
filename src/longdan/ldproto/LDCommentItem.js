var LDJSONLoggable = require('./LDJSONLoggable');
var LDComment = require('./LDComment');
var LDPostContainer = require('./LDPostContainer');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.CommentId=new Buffer(e['i'],'base64');
	if(e['p']!=null)$.PostId=new LDPostId(e['p']);
	if(e['P']!=null)$.Post=new LDPostContainer(e['P']);
	if(e['C']!=null)$.CommentDetail=new LDComment(e['C']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCommentItem";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommentId!=null)o['i']=$.CommentId.toString('base64');
	if($.PostId!=null)o['p']=$.PostId.encode();
	if($.Post!=null)o['P']=$.Post.encode();
	if($.CommentDetail!=null)o['C']=$.CommentDetail.encode();
	return o;
}
_.CommentId=null;
_.PostId=null;
_.Post=null;
_.CommentDetail=null;

module.exports=O;
