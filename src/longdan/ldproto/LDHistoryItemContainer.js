var LDJSONLoggable = require('./LDJSONLoggable');
var LDJoinCommunityItem = require('./LDJoinCommunityItem');
var LDFollowItem = require('./LDFollowItem');
var LDLikeItem = require('./LDLikeItem');
var LDCommentItem = require('./LDCommentItem');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Timestamp=e['t'];
	if(e['c']!=null)$.CommentItem=new LDCommentItem(e['c']);
	if(e['l']!=null)$.LikeItem=new LDLikeItem(e['l']);
	if(e['f']!=null)$.FollowItem=new LDFollowItem(e['f']);
	if(e['j']!=null)$.JoinItem=new LDJoinCommunityItem(e['j']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDHistoryItemContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.CommentItem!=null)o['c']=$.CommentItem.encode();
	if($.LikeItem!=null)o['l']=$.LikeItem.encode();
	if($.FollowItem!=null)o['f']=$.FollowItem.encode();
	if($.JoinItem!=null)o['j']=$.JoinItem.encode();
	return o;
}
_.Timestamp=null;
_.CommentItem=null;
_.LikeItem=null;
_.FollowItem=null;
_.JoinItem=null;

module.exports=O;
