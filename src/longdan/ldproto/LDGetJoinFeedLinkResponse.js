var LDJSONLoggable = require('./LDJSONLoggable');
var LDJoinFeedLink = require('./LDJoinFeedLink');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null)$.JoinLink=new LDJoinFeedLink(e['l']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetJoinFeedLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.JoinLink!=null)o['l']=$.JoinLink.encode();
	return o;
}
_.JoinLink=null;

module.exports=O;
