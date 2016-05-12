var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');
var LDIdentityHash = require('./LDIdentityHash');

function LDContactDetails(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Name=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['D']!=null)$.ProfileDecryptedHash=new Buffer(e['D'],'base64');
	$.ProfileVideoLink=e['pv'];
	if(e['Dv']!=null)$.ProfileVideoDecryptedHash=new Buffer(e['Dv'],'base64');
	$.Version=e['v'];
	$.Display=e['d'];
	$.Blocked=e['b'];
	$.WasContact=e['wc'];
	$.HasAppTime=e['t'];
	if(e['h']!=null){
		$.Hashidentities=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)$.Hashidentities.push(new LDIdentityHash(d[k]));
	}
	if(e['i']!=null){
		$.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Identities.push(new LDIdentity(d[k]));
	}
}
LDContactDetails.prototype=new LDJSONLoggable();
LDContactDetails.prototype.constructor = LDContactDetails;
var _=LDContactDetails.prototype;
_.__type="LDContactDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.ProfileDecryptedHash!=null)o['D']=$.ProfileDecryptedHash.toString('base64');
	if($.ProfileVideoLink!=null)o['pv']=$.ProfileVideoLink;
	if($.ProfileVideoDecryptedHash!=null)o['Dv']=$.ProfileVideoDecryptedHash.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.Display!=null)o['d']=$.Display;
	if($.Blocked!=null)o['b']=$.Blocked;
	if($.WasContact!=null)o['wc']=$.WasContact;
	if($.HasAppTime!=null)o['t']=$.HasAppTime;
	if($.Hashidentities!=null) {
		o['h']=[];
		var d=$.Hashidentities;
		for(var k=0;k<d.length;++k) o['h'].push(d[k].encode());
	}
	if($.Identities!=null) {
		o['i']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.Account=null;
_.Name=null;
_.ProfilePictureLink=null;
_.ProfileDecryptedHash=null;
_.ProfileVideoLink=null;
_.ProfileVideoDecryptedHash=null;
_.Version=null;
_.Display=null;
_.Blocked=null;
_.WasContact=null;
_.HasAppTime=null;
_.Hashidentities=null;
_.Identities=null;

module.exports=LDContactDetails;
