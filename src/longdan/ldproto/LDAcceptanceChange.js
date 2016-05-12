var LDSynchronizedMessageBody = require('./LDSynchronizedMessageBody');

function LDAcceptanceChange(e){
	LDSynchronizedMessageBody.call(this,e);
	if(!e)return;
	var $=this;
	$.Acceptance=e['a'];
}
LDAcceptanceChange.prototype=new LDSynchronizedMessageBody();
LDAcceptanceChange.prototype.constructor = LDAcceptanceChange;
var _=LDAcceptanceChange.prototype;
_.__type="LDAcceptanceChange";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDSynchronizedMessageBody.prototype.encode.call($,o);
	if($.Acceptance!=null)o['a']=$.Acceptance;
	return o;
}
_.Acceptance=null;

module.exports=LDAcceptanceChange;
