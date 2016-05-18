var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSendRealtimeMessageToAllFollowersRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	return o;
}
_.Type=null;
_.Body=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sr":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
