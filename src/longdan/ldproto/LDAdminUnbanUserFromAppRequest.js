var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');
var LDAppScopeId = require('./LDAppScopeId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	if(e['s']!=null)$.AppScopeId=new LDAppScopeId(e['s']);
	if(e['i']!=null)$.ItemId=new LDItemId(e['i']);
	$.PackageId=e['pid'];
	$.Pub=e['p'];
	$.Cluster=e['c'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAdminUnbanUserFromAppRequest";
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
	if($.Pub!=null)o['p']=$.Pub;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.AppScopeId=null;
_.ItemId=null;
_.PackageId=null;
_.Pub=null;
_.Cluster=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"uua":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
