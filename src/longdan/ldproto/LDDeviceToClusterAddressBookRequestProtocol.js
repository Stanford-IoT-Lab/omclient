var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDMutualAddContactByTokenRequest = require('./LDMutualAddContactByTokenRequest');
var LDGetAddMeLinkRequest = require('./LDGetAddMeLinkRequest');
var LDGetContactProfileRequest = require('./LDGetContactProfileRequest');
var LDUploadAddressBookEntriesRequest = require('./LDUploadAddressBookEntriesRequest');

function LDDeviceToClusterAddressBookRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.UploadEntriesRequest=new LDUploadAddressBookEntriesRequest(e['u']);
	if(e['c']!=null)$.GetContactProfileRequest=new LDGetContactProfileRequest(e['c']);
	if(e['a']!=null)$.GetAddMeLinkRequest=new LDGetAddMeLinkRequest(e['a']);
	if(e['m']!=null)$.MutualAddContact=new LDMutualAddContactByTokenRequest(e['m']);
}
LDDeviceToClusterAddressBookRequestProtocol.prototype=new LDRequestProtocolBase();
LDDeviceToClusterAddressBookRequestProtocol.prototype.constructor = LDDeviceToClusterAddressBookRequestProtocol;
var _=LDDeviceToClusterAddressBookRequestProtocol.prototype;
_.__type="LDDeviceToClusterAddressBookRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.UploadEntriesRequest!=null)o['u']=$.UploadEntriesRequest.encode();
	if($.GetContactProfileRequest!=null)o['c']=$.GetContactProfileRequest.encode();
	if($.GetAddMeLinkRequest!=null)o['a']=$.GetAddMeLinkRequest.encode();
	if($.MutualAddContact!=null)o['m']=$.MutualAddContact.encode();
	return o;
}
_.UploadEntriesRequest=null;
_.GetContactProfileRequest=null;
_.GetAddMeLinkRequest=null;
_.MutualAddContact=null;

module.exports=LDDeviceToClusterAddressBookRequestProtocol;
