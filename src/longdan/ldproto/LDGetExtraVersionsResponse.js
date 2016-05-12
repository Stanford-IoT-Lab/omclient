var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetExtraVersionsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['h']!=null){
		$.ExtraVersions = {};
		var d = e['h'];
		for(var k in d) $.ExtraVersions[k]=d[k];
	}
}
LDGetExtraVersionsResponse.prototype=new LDJSONLoggable();
LDGetExtraVersionsResponse.prototype.constructor = LDGetExtraVersionsResponse;
var _=LDGetExtraVersionsResponse.prototype;
_.__type="LDGetExtraVersionsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ExtraVersions!=null){
		o['h']={};
		var d=$.ExtraVersions;
		for(var k in d)o['h'][k]=d[k];
	}
	return o;
}
_.ExtraVersions=null;

module.exports=LDGetExtraVersionsResponse;
