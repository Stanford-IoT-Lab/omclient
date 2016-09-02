var LDWallResponse = require('./LDWallResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostTag = require('./LDPostTag');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.PrimaryTag=new LDPostTag(e['p']);
	if(e['ck']!=null)$.ContinuationKey=new Buffer(e['ck'],'base64');
	$.CrossFirewall=e['xg'];
	$.UserLocale=e['lc'];
	$.Featured=e['f'];
	$.OldestAllowed=e['o'];
	$.NumPosts=e['n'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetRecentPostsRequest";
_.__rt=LDWallResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PrimaryTag!=null)o['p']=$.PrimaryTag.encode();
	if($.ContinuationKey!=null)o['ck']=$.ContinuationKey.toString('base64');
	if($.CrossFirewall!=null)o['xg']=$.CrossFirewall;
	if($.UserLocale!=null)o['lc']=$.UserLocale;
	if($.Featured!=null)o['f']=$.Featured;
	if($.OldestAllowed!=null)o['o']=$.OldestAllowed;
	if($.NumPosts!=null)o['n']=$.NumPosts;
	return o;
}
_.PrimaryTag=null;
_.ContinuationKey=null;
_.CrossFirewall=null;
_.UserLocale=null;
_.Featured=null;
_.OldestAllowed=null;
_.NumPosts=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"grp":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
