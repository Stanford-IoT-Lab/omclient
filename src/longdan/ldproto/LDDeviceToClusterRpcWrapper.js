var LDJSONLoggable = require('./LDJSONLoggable');
var LDDeviceToClusterResponseContainer = require('./LDDeviceToClusterResponseContainer');
var LDDeviceToClusterRequestContainer = require('./LDDeviceToClusterRequestContainer');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['q']!=null)$.Request=new LDDeviceToClusterRequestContainer(e['q']);
	if(e['r']!=null)$.Response=new LDDeviceToClusterResponseContainer(e['r']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterRpcWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Request!=null)o['q']=$.Request.encode();
	if($.Response!=null)o['r']=$.Response.encode();
	return o;
}
_.Request=null;
_.Response=null;

module.exports=O;
