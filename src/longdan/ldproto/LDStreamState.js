var LDJSONLoggable = require('./LDJSONLoggable');
var LDUser = require('./LDUser');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.User=new LDUser(e['a']);
	$.LastAppName=e['n'];
	$.LastAppIconBlobLink=e['b'];
	$.LastPackageName=e['p'];
	$.StreamingLink=e['s'];
	$.LastStream=e['S'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDStreamState";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.User!=null)o['a']=$.User.encode();
	if($.LastAppName!=null)o['n']=$.LastAppName;
	if($.LastAppIconBlobLink!=null)o['b']=$.LastAppIconBlobLink;
	if($.LastPackageName!=null)o['p']=$.LastPackageName;
	if($.StreamingLink!=null)o['s']=$.StreamingLink;
	if($.LastStream!=null)o['S']=$.LastStream;
	return o;
}
_.User=null;
_.LastAppName=null;
_.LastAppIconBlobLink=null;
_.LastPackageName=null;
_.StreamingLink=null;
_.LastStream=null;

module.exports=O;
