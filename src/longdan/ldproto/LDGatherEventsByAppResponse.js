var LDJSONLoggable = require('./LDJSONLoggable');

function LDGatherEventsByAppResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.Buckets=e['b'];
	if(e['c']!=null){
		$.Counts = {};
		var d = e['c'];
		for(var k in d) $.Counts[k]=d[k];
	}
}
LDGatherEventsByAppResponse.prototype=new LDJSONLoggable();
LDGatherEventsByAppResponse.prototype.constructor = LDGatherEventsByAppResponse;
var _=LDGatherEventsByAppResponse.prototype;
_.__type="LDGatherEventsByAppResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Buckets!=null)o['b']=$.Buckets;
	if($.Counts!=null){
		o['c']={};
		var d=$.Counts;
		for(var k in d)o['c'][k]=d[k];
	}
	return o;
}
_.Buckets=null;
_.Counts=null;

module.exports=LDGatherEventsByAppResponse;
