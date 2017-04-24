var LDJSONLoggable = require('./LDJSONLoggable');
var LDComment = require('./LDComment');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['C']!=null){
		$.Comments=[];
		var d = e['C'];
		for(var k=0; k<d.length;++k)$.Comments.push(new LDComment(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCommentsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Comments!=null) {
		o['C']=[];
		var d=$.Comments;
		for(var k=0;k<d.length;++k) o['C'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Comments=null;
_.ContinuationKey=null;

module.exports=O;
