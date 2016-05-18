var LDGetContactProfileResponse = require('./LDGetContactProfileResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentityHash = require('./LDIdentityHash');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.IdentityHash=new LDIdentityHash(e['i']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
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
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"c":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
