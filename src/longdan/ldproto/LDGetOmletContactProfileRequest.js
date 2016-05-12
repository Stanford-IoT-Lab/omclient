var LDGetOmletContactProfileResponse = require('./LDGetOmletContactProfileResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetOmletContactProfileRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.RequestedAccount=e['c'];
}
LDGetOmletContactProfileRequest.prototype=new LDJSONLoggable();
LDGetOmletContactProfileRequest.prototype.constructor = LDGetOmletContactProfileRequest;
var _=LDGetOmletContactProfileRequest.prototype;
_.__type="LDGetOmletContactProfileRequest";
_.__rt=LDGetOmletContactProfileResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.RequestedAccount!=null)o['c']=$.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
LDGetOmletContactProfileRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"c":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetOmletContactProfileRequest;
