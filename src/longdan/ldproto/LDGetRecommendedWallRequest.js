var LDWallResponse = require('./LDWallResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function LDGetRecommendedWallRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.PostId=new LDPostId(e['p']);
	$.GameTag=e['g'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
LDGetRecommendedWallRequest.prototype=new LDJSONLoggable();
LDGetRecommendedWallRequest.prototype.constructor = LDGetRecommendedWallRequest;
var _=LDGetRecommendedWallRequest.prototype;
_.__type="LDGetRecommendedWallRequest";
_.__rt=LDWallResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['p']=$.PostId.encode();
	if($.GameTag!=null)o['g']=$.GameTag;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.PostId=null;
_.GameTag=null;
_.ContinuationKey=null;
LDGetRecommendedWallRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"grw":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetRecommendedWallRequest;
