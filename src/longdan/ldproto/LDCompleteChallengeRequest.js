var LDCompleteChallengeResponse = require('./LDCompleteChallengeResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null)$.SourceResponse=new Buffer(e['r'],'base64');
	$.Type=e['t'];
	$.Manufacturer=e['m'];
	$.Model=e['d'];
	$.OsVersion=e['o'];
	$.ClientVersion=e['v'];
	$.Locale=e['l'];
	if(e['c']!=null)$.AppChallengeResponse=new Buffer(e['c'],'base64');
	$.System=e['s'];
	$.PackageId=e['p'];
	$.OmlibVersion=e['y'];
	$.PackageVersion=e['z'];
	$.PushReceivedSinceLastConnection=e['pr'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCompleteChallengeRequest";
_.__rt=LDCompleteChallengeResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.SourceResponse!=null)o['r']=$.SourceResponse.toString('base64');
	if($.Type!=null)o['t']=$.Type;
	if($.Manufacturer!=null)o['m']=$.Manufacturer;
	if($.Model!=null)o['d']=$.Model;
	if($.OsVersion!=null)o['o']=$.OsVersion;
	if($.ClientVersion!=null)o['v']=$.ClientVersion;
	if($.Locale!=null)o['l']=$.Locale;
	if($.AppChallengeResponse!=null)o['c']=$.AppChallengeResponse.toString('base64');
	if($.System!=null)o['s']=$.System;
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.OmlibVersion!=null)o['y']=$.OmlibVersion;
	if($.PackageVersion!=null)o['z']=$.PackageVersion;
	if($.PushReceivedSinceLastConnection!=null)o['pr']=$.PushReceivedSinceLastConnection;
	return o;
}
_.SourceResponse=null;
_.Type=null;
_.Manufacturer=null;
_.Model=null;
_.OsVersion=null;
_.ClientVersion=null;
_.Locale=null;
_.AppChallengeResponse=null;
_.System=null;
_.PackageId=null;
_.OmlibVersion=null;
_.PackageVersion=null;
_.PushReceivedSinceLastConnection=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"+":o};o=t;
	t={"q":o};o=t;
	return o;
}
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"#":id,"+":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
