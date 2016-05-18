var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.ProfileName=e['n'];
	$.ProfilePictureLink=e['p'];
	$.Score=e['s'];
	$.Rank=e['r'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDScoreBoardEntry";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.ProfileName!=null)o['n']=$.ProfileName;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.Score!=null)o['s']=$.Score;
	if($.Rank!=null)o['r']=$.Rank;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	return o;
}
_.Account=null;
_.ProfileName=null;
_.ProfilePictureLink=null;
_.Score=null;
_.Rank=null;
_.ProfileDecryptedHash=null;

module.exports=O;
