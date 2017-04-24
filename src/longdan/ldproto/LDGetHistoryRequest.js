var LDGetHistoryResponse = require('./LDGetHistoryResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.NumToGet=e['n'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.Locale=e['lc'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetHistoryRequest";
_.__rt=LDGetHistoryResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.NumToGet!=null)o['n']=$.NumToGet;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.Locale!=null)o['lc']=$.Locale;
	return o;
}
_.Account=null;
_.NumToGet=null;
_.ContinuationKey=null;
_.Locale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gh":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
