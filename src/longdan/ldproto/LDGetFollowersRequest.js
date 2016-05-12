var LDGetFollowersResponse = require('./LDGetFollowersResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetFollowersRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.NumToGet=e['n'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
LDGetFollowersRequest.prototype=new LDJSONLoggable();
LDGetFollowersRequest.prototype.constructor = LDGetFollowersRequest;
var _=LDGetFollowersRequest.prototype;
_.__type="LDGetFollowersRequest";
_.__rt=LDGetFollowersResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.NumToGet!=null)o['n']=$.NumToGet;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Account=null;
_.NumToGet=null;
_.ContinuationKey=null;
LDGetFollowersRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gf":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetFollowersRequest;
