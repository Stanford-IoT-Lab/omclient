var LDJSONLoggable = require('./LDJSONLoggable');
var LDPrettyPermissions = require('./LDPrettyPermissions');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['pp']!=null)$.PrettyPermissions=new LDPrettyPermissions(e['pp']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPermissionsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PrettyPermissions!=null)o['pp']=$.PrettyPermissions.encode();
	return o;
}
_.PrettyPermissions=null;

module.exports=O;
