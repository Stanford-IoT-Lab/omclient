var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Latitude=e['x'];
	$.Longitude=e['y'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGPSLocation";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	return o;
}
_.Latitude=null;
_.Longitude=null;

module.exports=O;
