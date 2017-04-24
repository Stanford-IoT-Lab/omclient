var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDDeleteNotificationRequest = require('./LDDeleteNotificationRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null)$.DeleteNotificationRequest=new LDDeleteNotificationRequest(e['d']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterAppNotificationRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.DeleteNotificationRequest!=null)o['d']=$.DeleteNotificationRequest.encode();
	return o;
}
_.DeleteNotificationRequest=null;

module.exports=O;
