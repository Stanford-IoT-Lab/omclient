var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetAccountDetailsByAccountRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.AccountToLookup=e['A'];
}
LDGetAccountDetailsByAccountRequest.prototype=new LDJSONLoggable();
LDGetAccountDetailsByAccountRequest.prototype.constructor = LDGetAccountDetailsByAccountRequest;
var _=LDGetAccountDetailsByAccountRequest.prototype;
_.__type="LDGetAccountDetailsByAccountRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.AccountToLookup!=null)o['A']=$.AccountToLookup;
	return o;
}
_.AdminAccount=null;
_.AccountToLookup=null;
LDGetAccountDetailsByAccountRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"a":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetAccountDetailsByAccountRequest;
