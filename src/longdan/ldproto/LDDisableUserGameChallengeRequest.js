var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDDisableUserGameChallengeRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
}
LDDisableUserGameChallengeRequest.prototype=new LDJSONLoggable();
LDDisableUserGameChallengeRequest.prototype.constructor = LDDisableUserGameChallengeRequest;
var _=LDDisableUserGameChallengeRequest.prototype;
_.__type="LDDisableUserGameChallengeRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
LDDisableUserGameChallengeRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"g":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDDisableUserGameChallengeRequest;
