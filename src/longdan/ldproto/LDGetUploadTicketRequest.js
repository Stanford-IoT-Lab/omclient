var LDGetUploadTicketResponse = require('./LDGetUploadTicketResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDBlobMetadata = require('./LDBlobMetadata');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Cluster=e['c'];
	if(e['m']!=null)$.Metadata=new LDBlobMetadata(e['m']);
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
	$.PreferInsecure=e['e'];
	$.AllowLarge=e['l'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetUploadTicketRequest";
_.__rt=LDGetUploadTicketResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.Metadata!=null)o['m']=$.Metadata.encode();
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	if($.PreferInsecure!=null)o['e']=$.PreferInsecure;
	if($.AllowLarge!=null)o['l']=$.AllowLarge;
	return o;
}
_.Account=null;
_.Cluster=null;
_.Metadata=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
_.PreferInsecure=null;
_.AllowLarge=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ut":o};o=t;
	t={"#":id,"b":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
