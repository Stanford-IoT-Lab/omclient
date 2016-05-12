var LDGetContactProfileResponse = require('./LDGetContactProfileResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentityHash = require('./LDIdentityHash');

function LDGetContactProfileRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.IdentityHash=new LDIdentityHash(e['i']);
}
LDGetContactProfileRequest.prototype=new LDJSONLoggable();
LDGetContactProfileRequest.prototype.constructor = LDGetContactProfileRequest;
var _=LDGetContactProfileRequest.prototype;
_.__type="LDGetContactProfileRequest";
_.__rt=LDGetContactProfileResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.IdentityHash!=null)o['i']=$.IdentityHash.encode();
	return o;
}
_.IdentityHash=null;
LDGetContactProfileRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"c":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetContactProfileRequest;
