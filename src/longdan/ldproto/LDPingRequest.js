var LDPingResponse = require('./LDPingResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.NextPingDelayMs=e['n'];
	$.LastRtt=e['l'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPingRequest";
_.__rt=LDPingResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.NextPingDelayMs!=null)o['n']=$.NextPingDelayMs;
	if($.LastRtt!=null)o['l']=$.LastRtt;
	return o;
}
_.NextPingDelayMs=null;
_.LastRtt=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"-":o};o=t;
	t={"q":o};o=t;
	return o;
}
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"-":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
