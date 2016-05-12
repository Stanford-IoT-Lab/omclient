var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDSetOnlineStatusRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Online=e['o'];
	$.AppName=e['n'];
	$.AppIconBlobLink=e['b'];
}
LDSetOnlineStatusRequest.prototype=new LDJSONLoggable();
LDSetOnlineStatusRequest.prototype.constructor = LDSetOnlineStatusRequest;
var _=LDSetOnlineStatusRequest.prototype;
_.__type="LDSetOnlineStatusRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Online!=null)o['o']=$.Online;
	if($.AppName!=null)o['n']=$.AppName;
	if($.AppIconBlobLink!=null)o['b']=$.AppIconBlobLink;
	return o;
}
_.Online=null;
_.AppName=null;
_.AppIconBlobLink=null;
LDSetOnlineStatusRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"o":o};o=t;
	t={"#":id,"ps":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetOnlineStatusRequest;
