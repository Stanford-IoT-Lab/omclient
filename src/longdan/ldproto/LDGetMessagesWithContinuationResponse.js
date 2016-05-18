var LDJSONLoggable = require('./LDJSONLoggable');
var LDMessage = require('./LDMessage');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null){
		$.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.Messages.push(new LDMessage(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetMessagesWithContinuationResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Messages!=null) {
		o['m']=[];
		var d=$.Messages;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Messages=null;
_.ContinuationKey=null;

module.exports=O;
