var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDReportUserRequest = require('./LDReportUserRequest');
var LDBlockUserRequest = require('./LDBlockUserRequest');
var LDUnblockUserRequest = require('./LDUnblockUserRequest');
var LDListBlockedUsersRequest = require('./LDListBlockedUsersRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null)$.ListBlockedUsersRequest=new LDListBlockedUsersRequest(e['l']);
	if(e['u']!=null)$.UnblockUserRequest=new LDUnblockUserRequest(e['u']);
	if(e['b']!=null)$.BlockUserRequest=new LDBlockUserRequest(e['b']);
	if(e['r']!=null)$.ReportUserRequest=new LDReportUserRequest(e['r']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterUserModerationRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.ListBlockedUsersRequest!=null)o['l']=$.ListBlockedUsersRequest.encode();
	if($.UnblockUserRequest!=null)o['u']=$.UnblockUserRequest.encode();
	if($.BlockUserRequest!=null)o['b']=$.BlockUserRequest.encode();
	if($.ReportUserRequest!=null)o['r']=$.ReportUserRequest.encode();
	return o;
}
_.ListBlockedUsersRequest=null;
_.UnblockUserRequest=null;
_.BlockUserRequest=null;
_.ReportUserRequest=null;

module.exports=O;
