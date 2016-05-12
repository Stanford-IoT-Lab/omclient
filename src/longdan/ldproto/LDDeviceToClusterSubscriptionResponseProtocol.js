var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDCreateSubscriptionResponse = require('./LDCreateSubscriptionResponse');

function LDDeviceToClusterSubscriptionResponseProtocol(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.GetSubscriptionUrl=new LDCreateSubscriptionResponse(e['u']);
}
LDDeviceToClusterSubscriptionResponseProtocol.prototype=new LDResponseProtocolBase();
LDDeviceToClusterSubscriptionResponseProtocol.prototype.constructor = LDDeviceToClusterSubscriptionResponseProtocol;
var _=LDDeviceToClusterSubscriptionResponseProtocol.prototype;
_.__type="LDDeviceToClusterSubscriptionResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetSubscriptionUrl!=null)o['u']=$.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;

module.exports=LDDeviceToClusterSubscriptionResponseProtocol;
