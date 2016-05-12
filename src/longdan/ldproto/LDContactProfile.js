var LDIdentity = require('./LDIdentity');

function LDContactProfile(e){
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	$.Version=e['v'];
	if(e['i']!=null){
		$.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Identities.push(new LDIdentity(d[k]));
	}
	$.HasAppTime=e['t'];
	$.ProfileVideoLink=e['pv'];
	if(e['dv']!=null)$.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
}
var _=LDContactProfile.prototype;
_.__type="LDContactProfile";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.Identities!=null) {
		o['i']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.HasAppTime!=null)o['t']=$.HasAppTime;
	if($.ProfileVideoLink!=null)o['pv']=$.ProfileVideoLink;
	if($.ProfileVideoDecryptedHash!=null)o['dv']=$.ProfileVideoDecryptedHash.toString('base64');
	return o;
}
_.Name=null;
_.ProfilePictureLink=null;
_.ProfileDecryptedHash=null;
_.Version=null;
_.Identities=null;
_.HasAppTime=null;
_.ProfileVideoLink=null;
_.ProfileVideoDecryptedHash=null;

module.exports=LDContactProfile;
