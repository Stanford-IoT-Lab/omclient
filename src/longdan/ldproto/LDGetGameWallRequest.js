var LDWallResponse = require('./LDWallResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostTag = require('./LDPostTag');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.GameTag=e['g'];
	if(e['t']!=null)$.SecondTag=new LDPostTag(e['t']);
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.PostsToGet=e['n'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetGameWallRequest";
_.__rt=LDWallResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.GameTag!=null)o['g']=$.GameTag;
	if($.SecondTag!=null)o['t']=$.SecondTag.encode();
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.PostsToGet!=null)o['n']=$.PostsToGet;
	return o;
}
_.GameTag=null;
_.SecondTag=null;
_.ContinuationKey=null;
_.PostsToGet=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ggw":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
