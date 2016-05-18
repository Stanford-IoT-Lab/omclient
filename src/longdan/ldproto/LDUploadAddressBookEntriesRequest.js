var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentityHash = require('./LDIdentityHash');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null){
		$.IdentityHashes=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.IdentityHashes.push(new LDIdentityHash(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDUploadAddressBookEntriesRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.IdentityHashes!=null) {
		o['i']=[];
		var d=$.IdentityHashes;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.IdentityHashes=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
