var LDJSONLoggable = require('./LDJSONLoggable');

function LDM3U8Info(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.BitRate=e['r'];
	if(e['h']!=null){
		$.Headers=[];
		var d = e['h'];
		for(var k=0;k<d.length;++k)$.Headers.push(d[k]);
	}
	if(e['t']!=null){
		$.Duration=[];
		var d = e['t'];
		for(var k=0;k<d.length;++k)$.Duration.push(d[k]);
	}
	if(e['b']!=null){
		$.File=[];
		var d = e['b'];
		for(var k=0;k<d.length;++k)$.File.push(d[k]);
	}
}
LDM3U8Info.prototype=new LDJSONLoggable();
LDM3U8Info.prototype.constructor = LDM3U8Info;
var _=LDM3U8Info.prototype;
_.__type="LDM3U8Info";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BitRate!=null)o['r']=$.BitRate;
	if($.Headers!=null) {
		o['h']=[];
		var d=$.Headers;
		for(var k=0;k<d.length;++k) o['h'].push(d[k]);
	}
	if($.Duration!=null) {
		o['t']=[];
		var d=$.Duration;
		for(var k=0;k<d.length;++k) o['t'].push(d[k]);
	}
	if($.File!=null) {
		o['b']=[];
		var d=$.File;
		for(var k=0;k<d.length;++k) o['b'].push(d[k]);
	}
	return o;
}
_.BitRate=null;
_.Headers=null;
_.Duration=null;
_.File=null;

module.exports=LDM3U8Info;
