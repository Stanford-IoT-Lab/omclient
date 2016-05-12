var LDUrlToStoryResponse = require('./LDUrlToStoryResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDUrlToStoryRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Url=e['l'];
}
LDUrlToStoryRequest.prototype=new LDJSONLoggable();
LDUrlToStoryRequest.prototype.constructor = LDUrlToStoryRequest;
var _=LDUrlToStoryRequest.prototype;
_.__type="LDUrlToStoryRequest";
_.__rt=LDUrlToStoryResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Url!=null)o['l']=$.Url;
	return o;
}
_.Url=null;
LDUrlToStoryRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"wl":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUrlToStoryRequest;
