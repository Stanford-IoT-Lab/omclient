var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');
var LDPostTag = require('./LDPostTag');
var LDComment = require('./LDComment');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
	$.CreationDate=e['ct'];
	$.Title=e['t'];
	$.Views=e['v'];
	$.Likes=e['l'];
	if(e['c']!=null){
		$.Comments=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)$.Comments.push(new LDComment(d[k]));
	}
	$.Score=e['s'];
	if(e['g']!=null){
		$.PostTags=[];
		var d = e['g'];
		for(var k=0; k<d.length;++k)$.PostTags.push(new LDPostTag(d[k]));
	}
	$.PosterName=e['un'];
	$.PosterProfilePictureLink=e['up'];
	if(e['oi']!=null)$.OmletId=new LDIdentity(e['oi']);
	$.YouLiked=e['yl'];
	$.AppName=e['an'];
	$.AppIconBlobLink=e['ai'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.CreationDate!=null)o['ct']=$.CreationDate;
	if($.Title!=null)o['t']=$.Title;
	if($.Views!=null)o['v']=$.Views;
	if($.Likes!=null)o['l']=$.Likes;
	if($.Comments!=null) {
		o['c']=[];
		var d=$.Comments;
		for(var k=0;k<d.length;++k) o['c'].push(d[k].encode());
	}
	if($.Score!=null)o['s']=$.Score;
	if($.PostTags!=null) {
		o['g']=[];
		var d=$.PostTags;
		for(var k=0;k<d.length;++k) o['g'].push(d[k].encode());
	}
	if($.PosterName!=null)o['un']=$.PosterName;
	if($.PosterProfilePictureLink!=null)o['up']=$.PosterProfilePictureLink;
	if($.OmletId!=null)o['oi']=$.OmletId.encode();
	if($.YouLiked!=null)o['yl']=$.YouLiked;
	if($.AppName!=null)o['an']=$.AppName;
	if($.AppIconBlobLink!=null)o['ai']=$.AppIconBlobLink;
	return o;
}
_.PostId=null;
_.CreationDate=null;
_.Title=null;
_.Views=null;
_.Likes=null;
_.Comments=null;
_.Score=null;
_.PostTags=null;
_.PosterName=null;
_.PosterProfilePictureLink=null;
_.OmletId=null;
_.YouLiked=null;
_.AppName=null;
_.AppIconBlobLink=null;

module.exports=O;
