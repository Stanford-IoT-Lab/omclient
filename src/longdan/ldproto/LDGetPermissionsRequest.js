var LDGetPermissionsResponse = require('./LDGetPermissionsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetPermissionsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	$.Cluster=e['c'];
}
LDGetPermissionsRequest.prototype=new LDJSONLoggable();
LDGetPermissionsRequest.prototype.constructor = LDGetPermissionsRequest;
var _=LDGetPermissionsRequest.prototype;
_.__type="LDGetPermissionsRequest";
_.__rt=LDGetPermissionsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Cluster=null;
LDGetPermissionsRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"gp":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetPermissionsRequest;
