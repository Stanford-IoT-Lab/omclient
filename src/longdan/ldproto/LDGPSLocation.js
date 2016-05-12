var LDJSONLoggable = require('./LDJSONLoggable');

function LDGPSLocation(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Latitude=e['x'];
	$.Longitude=e['y'];
}
LDGPSLocation.prototype=new LDJSONLoggable();
LDGPSLocation.prototype.constructor = LDGPSLocation;
var _=LDGPSLocation.prototype;
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

module.exports=LDGPSLocation;
