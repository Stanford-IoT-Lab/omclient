var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDDeleteDeviceRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['k']!=null)$.PublicKey=new Buffer(e['k'],'base64');
}
LDDeleteDeviceRequest.prototype=new LDJSONLoggable();
LDDeleteDeviceRequest.prototype.constructor = LDDeleteDeviceRequest;
var _=LDDeleteDeviceRequest.prototype;
_.__type="LDDeleteDeviceRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PublicKey!=null)o['k']=$.PublicKey.toString('base64');
	return o;
}
_.PublicKey=null;
LDDeleteDeviceRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"d":o};o=t;
	t={"#":id,"d":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDDeleteDeviceRequest;
