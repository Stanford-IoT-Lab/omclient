var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null){
		$.Records=[];
		var d = e['r'];
		for(var k=0;k<d.length;++k)$.Records.push(d[k]);
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetIdentityRecordsResponse";
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

module.exports=O;
