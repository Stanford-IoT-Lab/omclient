var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDAdminBanUserRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	$.Duration=e['d'];
	$.Cluster=e['c'];
}
LDAdminBanUserRequest.prototype=new LDJSONLoggable();
LDAdminBanUserRequest.prototype.constructor = LDAdminBanUserRequest;
var _=LDAdminBanUserRequest.prototype;
_.__type="LDAdminBanUserRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.Duration!=null)o['d']=$.Duration;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Duration=null;
_.Cluster=null;
LDAdminBanUserRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"bu":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAdminBanUserRequest;
