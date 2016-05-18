var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDCreateSubscriptionResponse = require('./LDCreateSubscriptionResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.GetSubscriptionUrl=new LDCreateSubscriptionResponse(e['u']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterSubscriptionResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.GetSubscriptionUrl!=null)o['u']=$.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;

module.exports=O;
