var LDJSONLoggable = require('./LDJSONLoggable');

function LDPresenceState(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.LastAppName=e['n'];
	$.LastAppIconBlobLink=e['b'];
	$.Online=e['o'];
	$.LastOnline=e['t'];
	$.StreamingLink=e['s'];
	$.LastStream=e['S'];
}
LDPresenceState.prototype=new LDJSONLoggable();
LDPresenceState.prototype.constructor = LDPresenceState;
var _=LDPresenceState.prototype;
_.__type="LDPresenceState";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.LastAppName!=null)o['n']=$.LastAppName;
	if($.LastAppIconBlobLink!=null)o['b']=$.LastAppIconBlobLink;
	if($.Online!=null)o['o']=$.Online;
	if($.LastOnline!=null)o['t']=$.LastOnline;
	if($.StreamingLink!=null)o['s']=$.StreamingLink;
	if($.LastStream!=null)o['S']=$.LastStream;
	return o;
}
_.Account=null;
_.LastAppName=null;
_.LastAppIconBlobLink=null;
_.Online=null;
_.LastOnline=null;
_.StreamingLink=null;
_.LastStream=null;

module.exports=LDPresenceState;
