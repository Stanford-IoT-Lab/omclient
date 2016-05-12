var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDCreateSubscriptionRequest = require('./LDCreateSubscriptionRequest');

function LDDeviceToClusterSubscriptionRequestProtocol(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.GetSubscriptionUrl=new LDCreateSubscriptionRequest(e['u']);
}
LDDeviceToClusterSubscriptionRequestProtocol.prototype=new LDRequestProtocolBase();
LDDeviceToClusterSubscriptionRequestProtocol.prototype.constructor = LDDeviceToClusterSubscriptionRequestProtocol;
var _=LDDeviceToClusterSubscriptionRequestProtocol.prototype;
_.__type="LDDeviceToClusterSubscriptionRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetSubscriptionUrl!=null)o['u']=$.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;

module.exports=LDDeviceToClusterSubscriptionRequestProtocol;
