var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AppName=e['ap'];
	$.AppIconBlobLink=e['ab'];
	$.UserLocale=e['lc'];
	if(e['rm']!=null){
		$.ReportMeta = {};
		var d = e['rm'];
		for(var k in d) $.ReportMeta[k]=d[k];
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostBaseRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AppName!=null)o['ap']=$.AppName;
	if($.AppIconBlobLink!=null)o['ab']=$.AppIconBlobLink;
	if($.UserLocale!=null)o['lc']=$.UserLocale;
	if($.ReportMeta!=null){
		o['rm']={};
		var d=$.ReportMeta;
		for(var k in d)o['rm'][k]=d[k];
	}
	return o;
}
_.AppName=null;
_.AppIconBlobLink=null;
_.UserLocale=null;
_.ReportMeta=null;

module.exports=O;
