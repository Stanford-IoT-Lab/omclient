var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.StreamingLink=e['s'];
	$.ExternalViewingLink=e['ev'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSetStreamingStatusRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.StreamingLink!=null)o['s']=$.StreamingLink;
	if($.ExternalViewingLink!=null)o['ev']=$.ExternalViewingLink;
	return o;
}
_.StreamingLink=null;
_.ExternalViewingLink=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ss":o};o=t;
	t={"#":id,"ps":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
