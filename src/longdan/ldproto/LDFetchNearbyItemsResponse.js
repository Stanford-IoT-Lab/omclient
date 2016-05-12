var LDJSONLoggable = require('./LDJSONLoggable');
var LDNearbyItemContainer = require('./LDNearbyItemContainer');

function LDFetchNearbyItemsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new LDNearbyItemContainer(d[k]));
	}
}
LDFetchNearbyItemsResponse.prototype=new LDJSONLoggable();
LDFetchNearbyItemsResponse.prototype.constructor = LDFetchNearbyItemsResponse;
var _=LDFetchNearbyItemsResponse.prototype;
_.__type="LDFetchNearbyItemsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.Items=null;

module.exports=LDFetchNearbyItemsResponse;
