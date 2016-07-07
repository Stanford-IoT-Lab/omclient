var LDVideoBasePost = require('./LDVideoBasePost');
var LDM3U8Info = require('./LDM3U8Info');

function O(e){
	LDVideoBasePost.call(this,e);
	if(!e)return;
	var $=this;
	$.HlsUrl=e['h'];
	if(e['m']!=null){
		$.M3u8s=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.M3u8s.push(new LDM3U8Info(d[k]));
	}
}
O.prototype=new LDVideoBasePost();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDVideoPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDVideoBasePost.prototype.encode.call($,o);
	if($.HlsUrl!=null)o['h']=$.HlsUrl;
	if($.M3u8s!=null) {
		o['m']=[];
		var d=$.M3u8s;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	return o;
}
_.HlsUrl=null;
_.M3u8s=null;

module.exports=O;
