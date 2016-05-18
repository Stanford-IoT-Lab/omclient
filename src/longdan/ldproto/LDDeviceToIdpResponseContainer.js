var LDResponseContainerBase = require('./LDResponseContainerBase');
var LDDeviceToIdpAdministrativeResponseProtocol = require('./LDDeviceToIdpAdministrativeResponseProtocol');
var LDDeviceToIdpSignupResponseProtocol = require('./LDDeviceToIdpSignupResponseProtocol');

function O(e){
	LDResponseContainerBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.Signup=new LDDeviceToIdpSignupResponseProtocol(e['a']);
	if(e['A']!=null)$.Administrative=new LDDeviceToIdpAdministrativeResponseProtocol(e['A']);
}
O.prototype=new LDResponseContainerBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToIdpResponseContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseContainerBase.prototype.encode.call($,o);
	if($.Signup!=null)o['a']=$.Signup.encode();
	if($.Administrative!=null)o['A']=$.Administrative.encode();
	return o;
}
_.Signup=null;
_.Administrative=null;

module.exports=O;
