var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.DisplayName=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['o']!=null)$.OmletId=new LDIdentity(e['o']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDUser";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.DisplayName!=null)o['n']=$.DisplayName;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.OmletId!=null)o['o']=$.OmletId.encode();
	return o;
}
_.Account=null;
_.DisplayName=null;
_.ProfilePictureLink=null;
_.OmletId=null;

module.exports=O;
