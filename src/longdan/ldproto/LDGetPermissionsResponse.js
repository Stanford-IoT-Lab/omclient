var LDJSONLoggable = require('./LDJSONLoggable');
var LDPrettyPermissions = require('./LDPrettyPermissions');

function LDGetPermissionsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['pp']!=null)$.PrettyPermissions=new LDPrettyPermissions(e['pp']);
}
LDGetPermissionsResponse.prototype=new LDJSONLoggable();
LDGetPermissionsResponse.prototype.constructor = LDGetPermissionsResponse;
var _=LDGetPermissionsResponse.prototype;
_.__type="LDGetPermissionsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PrettyPermissions!=null)o['pp']=$.PrettyPermissions.encode();
	return o;
}
_.PrettyPermissions=null;

module.exports=LDGetPermissionsResponse;
