var LDGetCarouselCommunitiesResponse = require('./LDGetCarouselCommunitiesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.UserLocale=e['lc'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCarouselCommunitiesRequest";
_.__rt=LDGetCarouselCommunitiesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.UserLocale!=null)o['lc']=$.UserLocale;
	return o;
}
_.ContinuationKey=null;
_.UserLocale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"cc":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
