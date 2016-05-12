var LDWallsResponse = require('./LDWallsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetFollowingWallRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
LDGetFollowingWallRequest.prototype=new LDJSONLoggable();
LDGetFollowingWallRequest.prototype.constructor = LDGetFollowingWallRequest;
var _=LDGetFollowingWallRequest.prototype;
_.__type="LDGetFollowingWallRequest";
_.__rt=LDWallsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.ContinuationKey=null;
LDGetFollowingWallRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gfw":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetFollowingWallRequest;
