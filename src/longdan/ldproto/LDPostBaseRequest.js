var LDJSONLoggable = require('./LDJSONLoggable');

function LDPostBaseRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AppName=e['ap'];
	$.AppIconBlobLink=e['ab'];
	if(e['rm']!=null){
		$.ReportMeta = {};
		var d = e['rm'];
		for(var k in d) $.ReportMeta[k]=d[k];
	}
}
LDPostBaseRequest.prototype=new LDJSONLoggable();
LDPostBaseRequest.prototype.constructor = LDPostBaseRequest;
var _=LDPostBaseRequest.prototype;
_.__type="LDPostBaseRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AppName!=null)o['ap']=$.AppName;
	if($.AppIconBlobLink!=null)o['ab']=$.AppIconBlobLink;
	if($.ReportMeta!=null){
		o['rm']={};
		var d=$.ReportMeta;
		for(var k in d)o['rm'][k]=d[k];
	}
	return o;
}
_.AppName=null;
_.AppIconBlobLink=null;
_.ReportMeta=null;

module.exports=LDPostBaseRequest;
