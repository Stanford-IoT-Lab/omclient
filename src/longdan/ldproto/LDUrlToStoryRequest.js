var LDUrlToStoryResponse = require('./LDUrlToStoryResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Url=e['l'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
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
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"wl":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
