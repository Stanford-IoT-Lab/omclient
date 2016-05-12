var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDAdminUnbanUserRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	$.Cluster=e['c'];
}
LDAdminUnbanUserRequest.prototype=new LDJSONLoggable();
LDAdminUnbanUserRequest.prototype.constructor = LDAdminUnbanUserRequest;
var _=LDAdminUnbanUserRequest.prototype;
_.__type="LDAdminUnbanUserRequest";
_.__rt=LDSimpleResponse;
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
LDAdminUnbanUserRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"uu":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAdminUnbanUserRequest;
