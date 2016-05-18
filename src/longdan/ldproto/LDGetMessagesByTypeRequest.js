var LDGetMessagesWithContinuationResponse = require('./LDGetMessagesWithContinuationResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Type=e['t'];
	if(e['n']!=null)$.NextResult=new Buffer(e['n'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetMessagesByTypeRequest";
_.__rt=LDGetMessagesWithContinuationResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Type!=null)o['t']=$.Type;
	if($.NextResult!=null)o['n']=$.NextResult.toString('base64');
	return o;
}
_.Feed=null;
_.Type=null;
_.NextResult=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"T":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
