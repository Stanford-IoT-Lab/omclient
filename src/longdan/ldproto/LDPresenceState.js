var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Locale=e['l'];
	$.LastAppName=e['n'];
	$.LastAppIconBlobLink=e['b'];
	$.LastPackageName=e['p'];
	$.Online=e['o'];
	$.LastOnline=e['t'];
	$.StreamingLink=e['s'];
	$.LastStream=e['S'];
	$.ExternalViewingLink=e['ev'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPresenceState";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Locale!=null)o['l']=$.Locale;
	if($.LastAppName!=null)o['n']=$.LastAppName;
	if($.LastAppIconBlobLink!=null)o['b']=$.LastAppIconBlobLink;
	if($.LastPackageName!=null)o['p']=$.LastPackageName;
	if($.Online!=null)o['o']=$.Online;
	if($.LastOnline!=null)o['t']=$.LastOnline;
	if($.StreamingLink!=null)o['s']=$.StreamingLink;
	if($.LastStream!=null)o['S']=$.LastStream;
	if($.ExternalViewingLink!=null)o['ev']=$.ExternalViewingLink;
	return o;
}
_.Account=null;
_.Locale=null;
_.LastAppName=null;
_.LastAppIconBlobLink=null;
_.LastPackageName=null;
_.Online=null;
_.LastOnline=null;
_.StreamingLink=null;
_.LastStream=null;
_.ExternalViewingLink=null;

module.exports=O;
