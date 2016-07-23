var LDGetAllCommunitiesResponse = require('./LDGetAllCommunitiesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.UserLocale=e['lc'];
	if(e['score']!=null)$.ContinuationKey=new Buffer(e['score'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetAllCommunitiesRequest";
_.__rt=LDGetAllCommunitiesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.UserLocale!=null)o['lc']=$.UserLocale;
	if($.ContinuationKey!=null)o['score']=$.ContinuationKey.toString('base64');
	return o;
}
_.UserLocale=null;
_.ContinuationKey=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gppi":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
