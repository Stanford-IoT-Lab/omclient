var LDJSONLoggable = require('./LDJSONLoggable');

function LDPrettyPermissions(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Banned=e['b'];
	if(e['a']!=null){
		$.RevokedApps = {};
		var d = e['a'];
		for(var k in d) $.RevokedApps[k]=d[k];
	}
	if(e['ap']!=null){
		$.PubRevokedApps = {};
		var d = e['ap'];
		for(var k in d) $.PubRevokedApps[k]=d[k];
	}
	$.RevokedUnsol=e['u'];
	if(e['bu']!=null){
		$.BlockedUsers=[];
		var d = e['bu'];
		for(var k=0;k<d.length;++k)$.BlockedUsers.push(d[k]);
	}
	if(e['bbu']!=null){
		$.BlockedByUsers=[];
		var d = e['bbu'];
		for(var k=0;k<d.length;++k)$.BlockedByUsers.push(d[k]);
	}
}
LDPrettyPermissions.prototype=new LDJSONLoggable();
LDPrettyPermissions.prototype.constructor = LDPrettyPermissions;
var _=LDPrettyPermissions.prototype;
_.__type="LDPrettyPermissions";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Banned!=null)o['b']=$.Banned;
	if($.RevokedApps!=null){
		o['a']={};
		var d=$.RevokedApps;
		for(var k in d)o['a'][k]=d[k];
	}
	if($.PubRevokedApps!=null){
		o['ap']={};
		var d=$.PubRevokedApps;
		for(var k in d)o['ap'][k]=d[k];
	}
	if($.RevokedUnsol!=null)o['u']=$.RevokedUnsol;
	if($.BlockedUsers!=null) {
		o['bu']=[];
		var d=$.BlockedUsers;
		for(var k=0;k<d.length;++k) o['bu'].push(d[k]);
	}
	if($.BlockedByUsers!=null) {
		o['bbu']=[];
		var d=$.BlockedByUsers;
		for(var k=0;k<d.length;++k) o['bbu'].push(d[k]);
	}
	return o;
}
_.Banned=null;
_.RevokedApps=null;
_.PubRevokedApps=null;
_.RevokedUnsol=null;
_.BlockedUsers=null;
_.BlockedByUsers=null;

module.exports=LDPrettyPermissions;
