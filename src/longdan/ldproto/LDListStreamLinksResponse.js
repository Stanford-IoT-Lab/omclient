var LDStreamState = require('./LDStreamState');

function O(e){
	if(!e)return;
	var $=this;
	if(e['S']!=null){
		$.Streams=[];
		var d = e['S'];
		for(var k=0; k<d.length;++k)$.Streams.push(new LDStreamState(d[k]));
	}
}
var _=O.prototype;
_.__type="LDListStreamLinksResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Streams!=null) {
		o['S']=[];
		var d=$.Streams;
		for(var k=0;k<d.length;++k) o['S'].push(d[k].encode());
	}
	return o;
}
_.Streams=null;

module.exports=O;
