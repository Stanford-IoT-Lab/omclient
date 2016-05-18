var LDRequestContainerBase = require('./LDRequestContainerBase');
var LDDeviceToIdpAdministrativeRequestProtocol = require('./LDDeviceToIdpAdministrativeRequestProtocol');
var LDDeviceToIdpSignupRequestProtocol = require('./LDDeviceToIdpSignupRequestProtocol');

function O(e){
	LDRequestContainerBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.Signup=new LDDeviceToIdpSignupRequestProtocol(e['a']);
	if(e['A']!=null)$.Administrative=new LDDeviceToIdpAdministrativeRequestProtocol(e['A']);
}
O.prototype=new LDRequestContainerBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToIdpRequestContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestContainerBase.prototype.encode.call($,o);
	if($.Signup!=null)o['a']=$.Signup.encode();
	if($.Administrative!=null)o['A']=$.Administrative.encode();
	return o;
}
_.Signup=null;
_.Administrative=null;

module.exports=O;
