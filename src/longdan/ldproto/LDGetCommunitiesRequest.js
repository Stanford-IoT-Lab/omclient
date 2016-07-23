var LDGetCommunitiesResponse = require('./LDGetCommunitiesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.User=e['u'];
	$.CommunityType=e['t'];
	$.IsGame=e['g'];
	if(e['ck']!=null)$.ContinuationKey=new Buffer(e['ck'],'base64');
	$.UserLocale=e['lc'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCommunitiesRequest";
_.__rt=LDGetCommunitiesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.User!=null)o['u']=$.User;
	if($.CommunityType!=null)o['t']=$.CommunityType;
	if($.IsGame!=null)o['g']=$.IsGame;
	if($.ContinuationKey!=null)o['ck']=$.ContinuationKey.toString('base64');
	if($.UserLocale!=null)o['lc']=$.UserLocale;
	return o;
}
_.User=null;
_.CommunityType=null;
_.IsGame=null;
_.ContinuationKey=null;
_.UserLocale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gg":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
