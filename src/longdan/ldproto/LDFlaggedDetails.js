var LDFlaggedRecord = require('./LDFlaggedRecord');

function O(e){
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['l']!=null){
		$.Records=[];
		var d = e['l'];
		for(var k=0; k<d.length;++k)$.Records.push(new LDFlaggedRecord(d[k]));
	}
}
var _=O.prototype;
_.__type="LDFlaggedDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['a']=$.Account;
	if($.Records!=null) {
		o['l']=[];
		var d=$.Records;
		for(var k=0;k<d.length;++k) o['l'].push(d[k].encode());
	}
	return o;
}
_.Account=null;
_.Records=null;

module.exports=O;
