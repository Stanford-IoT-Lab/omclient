var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetDeviceRecordsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null){
		$.Records=[];
		var d = e['r'];
		for(var k=0;k<d.length;++k)$.Records.push(d[k]);
	}
}
LDGetDeviceRecordsResponse.prototype=new LDJSONLoggable();
LDGetDeviceRecordsResponse.prototype.constructor = LDGetDeviceRecordsResponse;
var _=LDGetDeviceRecordsResponse.prototype;
_.__type="LDGetDeviceRecordsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Records!=null) {
		o['r']=[];
		var d=$.Records;
		for(var k=0;k<d.length;++k) o['r'].push(d[k]);
	}
	return o;
}
_.Records=null;

module.exports=LDGetDeviceRecordsResponse;
