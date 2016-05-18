var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null){
		$.Links=[];
		var d = e['l'];
		for(var k=0;k<d.length;++k)$.Links.push(d[k]);
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetExternalShareLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Links!=null) {
		o['l']=[];
		var d=$.Links;
		for(var k=0;k<d.length;++k) o['l'].push(d[k]);
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Links=null;
_.ContinuationKey=null;

module.exports=O;
