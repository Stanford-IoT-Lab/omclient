var LDJSONLoggable = require('./LDJSONLoggable');
var LDUser = require('./LDUser');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AccountToFollow=e['a'];
	if(e['u']!=null)$.AccountToFollowUser=new LDUser(e['u']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDFollowItem";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AccountToFollow!=null)o['a']=$.AccountToFollow;
	if($.AccountToFollowUser!=null)o['u']=$.AccountToFollowUser.encode();
	return o;
}
_.AccountToFollow=null;
_.AccountToFollowUser=null;

module.exports=O;
