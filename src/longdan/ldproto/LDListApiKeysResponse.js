var LDApiKey = require('./LDApiKey');

function LDListApiKeysResponse(e){
	if(!e)return;
	var $=this;
	if(e['ak']!=null){
		$.ApiKeys=[];
		var d = e['ak'];
		for(var k=0; k<d.length;++k)$.ApiKeys.push(new LDApiKey(d[k]));
	}
}
var _=LDListApiKeysResponse.prototype;
_.__type="LDListApiKeysResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ApiKeys!=null) {
		o['ak']=[];
		var d=$.ApiKeys;
		for(var k=0;k<d.length;++k) o['ak'].push(d[k].encode());
	}
	return o;
}
_.ApiKeys=null;

module.exports=LDListApiKeysResponse;
