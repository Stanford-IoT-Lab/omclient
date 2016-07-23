var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeaturedVideoClip = require('./LDFeaturedVideoClip');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['v']!=null){
		$.Clips=[];
		var d = e['v'];
		for(var k=0; k<d.length;++k)$.Clips.push(new LDFeaturedVideoClip(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetClippedVideosForPackageResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Clips!=null) {
		o['v']=[];
		var d=$.Clips;
		for(var k=0;k<d.length;++k) o['v'].push(d[k].encode());
	}
	return o;
}
_.Clips=null;

module.exports=O;
