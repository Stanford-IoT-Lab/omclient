var LDJSONLoggable = require('./LDJSONLoggable');
var LDHistoryItemContainer = require('./LDHistoryItemContainer');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['h']!=null){
		$.Histories=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)$.Histories.push(new LDHistoryItemContainer(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetHistoryResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Histories!=null) {
		o['h']=[];
		var d=$.Histories;
		for(var k=0;k<d.length;++k) o['h'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Histories=null;
_.ContinuationKey=null;

module.exports=O;
