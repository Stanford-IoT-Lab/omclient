var LDJSONLoggable = require('./LDJSONLoggable');

function LDUnsubscribeForNearbyItemsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDUnsubscribeForNearbyItemsRequest.prototype=new LDJSONLoggable();
LDUnsubscribeForNearbyItemsRequest.prototype.constructor = LDUnsubscribeForNearbyItemsRequest;
var _=LDUnsubscribeForNearbyItemsRequest.prototype;
_.__type="LDUnsubscribeForNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}
LDUnsubscribeForNearbyItemsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"us":o};o=t;
	t={"#":id,"n":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnsubscribeForNearbyItemsRequest;
