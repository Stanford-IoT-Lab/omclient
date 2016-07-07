var LDJSONLoggable = require('./LDJSONLoggable');
var LDCarouselItem = require('./LDCarouselItem');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ci']!=null){
		$.Items=[];
		var d = e['ci'];
		for(var k=0; k<d.length;++k)$.Items.push(new LDCarouselItem(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCarouselCommunitiesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Items!=null) {
		o['ci']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['ci'].push(d[k].encode());
	}
	return o;
}
_.Items=null;

module.exports=O;
