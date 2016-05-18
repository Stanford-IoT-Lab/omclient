var LDSynchronizedMessageBody = require('./LDSynchronizedMessageBody');

function O(e){
	LDSynchronizedMessageBody.call(this,e);
	if(!e)return;
	var $=this;
	$.Acceptance=e['a'];
}
O.prototype=new LDSynchronizedMessageBody();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAcceptanceChange";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDSynchronizedMessageBody.prototype.encode.call($,o);
	if($.Acceptance!=null)o['a']=$.Acceptance;
	return o;
}
_.Acceptance=null;

module.exports=O;
