var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetContactProfileAndPublicStateResponse = require('./LDGetContactProfileAndPublicStateResponse');
var LDGetProfilePublicStateResponse = require('./LDGetProfilePublicStateResponse');
var LDGetOmletContactProfileResponse = require('./LDGetOmletContactProfileResponse');
var LDGetProfileDetailsResponse = require('./LDGetProfileDetailsResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfileDetailsResponse=new LDGetProfileDetailsResponse(e['p']);
	if(e['c']!=null)$.ContactProfileResponse=new LDGetOmletContactProfileResponse(e['c']);
	if(e['pps']!=null)$.GetProfilePublicStateResponse=new LDGetProfilePublicStateResponse(e['pps']);
	if(e['ppp']!=null)$.GetProfileDetailsAndPublicStateResponse=new LDGetContactProfileAndPublicStateResponse(e['ppp']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterProfileResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.ProfileDetailsResponse!=null)o['p']=$.ProfileDetailsResponse.encode();
	if($.ContactProfileResponse!=null)o['c']=$.ContactProfileResponse.encode();
	if($.GetProfilePublicStateResponse!=null)o['pps']=$.GetProfilePublicStateResponse.encode();
	if($.GetProfileDetailsAndPublicStateResponse!=null)o['ppp']=$.GetProfileDetailsAndPublicStateResponse.encode();
	return o;
}
_.ProfileDetailsResponse=null;
_.ContactProfileResponse=null;
_.GetProfilePublicStateResponse=null;
_.GetProfileDetailsAndPublicStateResponse=null;

module.exports=O;
