var LDJSONLoggable = require('./LDJSONLoggable');

function LDBlobDownloadTicket(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Url=e['u'];
	if(e['h']!=null){
		$.Headers = {};
		var d = e['h'];
		for(var k in d) $.Headers[k]=d[k];
	}
}
LDBlobDownloadTicket.prototype=new LDJSONLoggable();
LDBlobDownloadTicket.prototype.constructor = LDBlobDownloadTicket;
var _=LDBlobDownloadTicket.prototype;
_.__type="LDBlobDownloadTicket";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Url!=null)o['u']=$.Url;
	if($.Headers!=null){
		o['h']={};
		var d=$.Headers;
		for(var k in d)o['h'][k]=d[k];
	}
	return o;
}
_.Url=null;
_.Headers=null;

module.exports=LDBlobDownloadTicket;
