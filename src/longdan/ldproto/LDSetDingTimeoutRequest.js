var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.DingTimeoutMillis=e['t'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSetDingTimeoutRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.DingTimeoutMillis!=null)o['t']=$.DingTimeoutMillis;
	return o;
}
_.DingTimeoutMillis=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"t":o};o=t;
	t={"#":id,"d":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
