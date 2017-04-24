var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Online=e['o'];
	$.AppName=e['n'];
	$.AppIconBlobLink=e['b'];
	$.PackageId=e['p'];
	$.Locale=e['lc'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSetOnlineStatusRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Online!=null)o['o']=$.Online;
	if($.AppName!=null)o['n']=$.AppName;
	if($.AppIconBlobLink!=null)o['b']=$.AppIconBlobLink;
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Locale!=null)o['lc']=$.Locale;
	return o;
}
_.Online=null;
_.AppName=null;
_.AppIconBlobLink=null;
_.PackageId=null;
_.Locale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"o":o};o=t;
	t={"#":id,"ps":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
