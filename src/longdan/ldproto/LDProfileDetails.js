var LDProfileIdentitySetting = require('./LDProfileIdentitySetting');

function LDProfileDetails(e){
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	$.ProfileVideoLink=e['pv'];
	if(e['dv']!=null)$.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
	$.Version=e['v'];
	if(e['i']!=null){
		$.IdentitySettings=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.IdentitySettings.push(new LDProfileIdentitySetting(d[k]));
	}
	$.HasAppTime=e['t'];
}
var _=LDProfileDetails.prototype;
_.__type="LDProfileDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	if($.ProfileVideoLink!=null)o['pv']=$.ProfileVideoLink;
	if($.ProfileVideoDecryptedHash!=null)o['dv']=$.ProfileVideoDecryptedHash.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.IdentitySettings!=null) {
		o['i']=[];
		var d=$.IdentitySettings;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.HasAppTime!=null)o['t']=$.HasAppTime;
	return o;
}
_.Name=null;
_.ProfilePictureLink=null;
_.ProfileDecryptedHash=null;
_.ProfileVideoLink=null;
_.ProfileVideoDecryptedHash=null;
_.Version=null;
_.IdentitySettings=null;
_.HasAppTime=null;

module.exports=LDProfileDetails;
