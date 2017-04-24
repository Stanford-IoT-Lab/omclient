var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ContentType=e['ct'];
	if(e['cf']!=null)$.Feed=new LDFeed(e['cf']);
	if(e['ci']!=null)$.TypedId=new LDTypedId(e['ci']);
	$.Account=e['ca'];
	$.ProfileVersion=e['cpv'];
	if(e['pid']!=null)$.PostId=new LDPostId(e['pid']);
	if(e['cid']!=null)$.CommentId=new Buffer(e['cid'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDContentIdBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContentType!=null)o['ct']=$.ContentType;
	if($.Feed!=null)o['cf']=$.Feed.encode();
	if($.TypedId!=null)o['ci']=$.TypedId.encode();
	if($.Account!=null)o['ca']=$.Account;
	if($.ProfileVersion!=null)o['cpv']=$.ProfileVersion;
	if($.PostId!=null)o['pid']=$.PostId.encode();
	if($.CommentId!=null)o['cid']=$.CommentId.toString('base64');
	return o;
}
_.ContentType=null;
_.Feed=null;
_.TypedId=null;
_.Account=null;
_.ProfileVersion=null;
_.PostId=null;
_.CommentId=null;

module.exports=O;
