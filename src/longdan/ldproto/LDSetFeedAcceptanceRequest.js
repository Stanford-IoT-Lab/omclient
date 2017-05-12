var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Acceptance=e['s'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSetFeedAcceptanceRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Acceptance!=null)o['s']=$.Acceptance;
	return o;
}
_.Feed=null;
_.Acceptance=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"a":o};o=t;
	t={"#":id,"i":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;