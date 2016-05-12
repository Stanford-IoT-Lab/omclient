var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');
var LDAppScopeId = require('./LDAppScopeId');

function LDAdminBanUserFromAppRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	if(e['s']!=null)$.AppScopeId=new LDAppScopeId(e['s']);
	if(e['i']!=null)$.ItemId=new LDItemId(e['i']);
	$.PackageId=e['pid'];
	$.Duration=e['d'];
	$.Pub=e['p'];
	$.Cluster=e['c'];
}
LDAdminBanUserFromAppRequest.prototype=new LDJSONLoggable();
LDAdminBanUserFromAppRequest.prototype.constructor = LDAdminBanUserFromAppRequest;
var _=LDAdminBanUserFromAppRequest.prototype;
_.__type="LDAdminBanUserFromAppRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.AppScopeId!=null)o['s']=$.AppScopeId.encode();
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.Duration!=null)o['d']=$.Duration;
	if($.Pub!=null)o['p']=$.Pub;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.AppScopeId=null;
_.ItemId=null;
_.PackageId=null;
_.Duration=null;
_.Pub=null;
_.Cluster=null;
LDAdminBanUserFromAppRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"bua":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAdminBanUserFromAppRequest;
