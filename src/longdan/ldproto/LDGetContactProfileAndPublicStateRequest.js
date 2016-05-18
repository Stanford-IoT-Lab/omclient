var LDGetContactProfileAndPublicStateResponse = require('./LDGetContactProfileAndPublicStateResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.RequestedAccount=e['c'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetContactProfileAndPublicStateRequest";
_.__rt=LDGetContactProfileAndPublicStateResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.RequestedAccount!=null)o['c']=$.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ppp":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
