var LDJSONLoggable = require('./LDJSONLoggable');
var LDAppDetailsFromStore = require('./LDAppDetailsFromStore');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null){
		$.List=[];
		var d = e['l'];
		for(var k=0; k<d.length;++k)$.List.push(new LDAppDetailsFromStore(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDListAppsByPopularityResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.List!=null) {
		o['l']=[];
		var d=$.List;
		for(var k=0;k<d.length;++k) o['l'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.List=null;
_.ContinuationKey=null;

module.exports=O;
