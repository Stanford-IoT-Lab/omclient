var LDGetFeaturedVideosResponse = require('./LDGetFeaturedVideosResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Locale=e['l'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetFeaturedVideosRequest";
_.__rt=LDGetFeaturedVideosResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Locale!=null)o['l']=$.Locale;
	return o;
}
_.Locale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gfv":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
