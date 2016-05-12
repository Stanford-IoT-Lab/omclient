var LDJSONLoggable = require('./LDJSONLoggable');

function LDBroadcastSettings(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Pin=e['p'];
	$.Expiration=e['e'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
	$.Country=e['c'];
	$.BroadcasterAccount=e['b'];
}
LDBroadcastSettings.prototype=new LDJSONLoggable();
LDBroadcastSettings.prototype.constructor = LDBroadcastSettings;
var _=LDBroadcastSettings.prototype;
_.__type="LDBroadcastSettings";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Pin!=null)o['p']=$.Pin;
	if($.Expiration!=null)o['e']=$.Expiration;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	if($.Country!=null)o['c']=$.Country;
	if($.BroadcasterAccount!=null)o['b']=$.BroadcasterAccount;
	return o;
}
_.Pin=null;
_.Expiration=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
_.Country=null;
_.BroadcasterAccount=null;

module.exports=LDBroadcastSettings;
