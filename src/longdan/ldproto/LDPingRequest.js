var LDPingResponse = require('./LDPingResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDPingRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.NextPingDelayMs=e['n'];
	$.LastRtt=e['l'];
}
LDPingRequest.prototype=new LDJSONLoggable();
LDPingRequest.prototype.constructor = LDPingRequest;
var _=LDPingRequest.prototype;
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
LDPingRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"-":o};o=t;
	t={"q":o};o=t;
	return o;
}
LDPingRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"-":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDPingRequest;
