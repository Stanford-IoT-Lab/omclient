var LDJSONLoggable = require('./LDJSONLoggable');
var LDAppDetails = require('./LDAppDetails');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null){
		$.Details=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)$.Details.push(new LDAppDetails(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetAppDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Details!=null) {
		o['d']=[];
		var d=$.Details;
		for(var k=0;k<d.length;++k) o['d'].push(d[k].encode());
	}
	return o;
}
_.Details=null;

module.exports=O;
