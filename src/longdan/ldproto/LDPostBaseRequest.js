var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostTag = require('./LDPostTag');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Description=e['d'];
	if(e['ccid']!=null)$.Ccid=new LDCommunityId(e['ccid']);
	if(e['pt']!=null)$.PrimaryTag=new LDPostTag(e['pt']);
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new LDPostTag(d[k]));
	}
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
	if($.Title!=null)o['t']=$.Title;
	if($.Description!=null)o['d']=$.Description;
	if($.Ccid!=null)o['ccid']=$.Ccid.encode();
	if($.PrimaryTag!=null)o['pt']=$.PrimaryTag.encode();
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
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
_.Title=null;
_.Description=null;
_.Ccid=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
_.AppName=null;
_.AppIconBlobLink=null;
_.UserLocale=null;
_.ReportMeta=null;

module.exports=O;
