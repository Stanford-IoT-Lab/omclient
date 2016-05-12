var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDChangeUserNameRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
	$.Name=e['n'];
}
LDChangeUserNameRequest.prototype=new LDJSONLoggable();
LDChangeUserNameRequest.prototype.constructor = LDChangeUserNameRequest;
var _=LDChangeUserNameRequest.prototype;
_.__type="LDChangeUserNameRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	if($.Name!=null)o['n']=$.Name;
	return o;
}
_.AdminAccount=null;
_.Account=null;
_.Name=null;
LDChangeUserNameRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"n":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDChangeUserNameRequest;
