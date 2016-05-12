var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDAddDeviceRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['k']!=null)$.PublicKey=new Buffer(e['k'],'base64');
	$.Version=e['v'];
	$.Description=e['d'];
}
LDAddDeviceRequest.prototype=new LDJSONLoggable();
LDAddDeviceRequest.prototype.constructor = LDAddDeviceRequest;
var _=LDAddDeviceRequest.prototype;
_.__type="LDAddDeviceRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PublicKey!=null)o['k']=$.PublicKey.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.Description!=null)o['d']=$.Description;
	return o;
}
_.PublicKey=null;
_.Version=null;
_.Description=null;
LDAddDeviceRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"c":o};o=t;
	t={"#":id,"d":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAddDeviceRequest;
