var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDCreateSubscriptionRequest = require('./LDCreateSubscriptionRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.GetSubscriptionUrl=new LDCreateSubscriptionRequest(e['u']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterSubscriptionRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetSubscriptionUrl!=null)o['u']=$.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;

module.exports=O;
