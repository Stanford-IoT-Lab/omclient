var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDUnblockContactRequest = require('./LDUnblockContactRequest');
var LDBlockContactRequest = require('./LDBlockContactRequest');
var LDRemoveContactRequest = require('./LDRemoveContactRequest');
var LDOverwriteContactRequest = require('./LDOverwriteContactRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['o']!=null)$.OverwriteContactsRequest=new LDOverwriteContactRequest(e['o']);
	if(e['r']!=null)$.RemoveContactRequest=new LDRemoveContactRequest(e['r']);
	if(e['b']!=null)$.BlockContactRequest=new LDBlockContactRequest(e['b']);
	if(e['u']!=null)$.UnblockContactRequest=new LDUnblockContactRequest(e['u']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterContactRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.OverwriteContactsRequest!=null)o['o']=$.OverwriteContactsRequest.encode();
	if($.RemoveContactRequest!=null)o['r']=$.RemoveContactRequest.encode();
	if($.BlockContactRequest!=null)o['b']=$.BlockContactRequest.encode();
	if($.UnblockContactRequest!=null)o['u']=$.UnblockContactRequest.encode();
	return o;
}
_.OverwriteContactsRequest=null;
_.RemoveContactRequest=null;
_.BlockContactRequest=null;
_.UnblockContactRequest=null;

module.exports=O;
