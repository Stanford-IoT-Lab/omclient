var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDGetContactProfileAndPublicStateRequest = require('./LDGetContactProfileAndPublicStateRequest');
var LDGetProfilePublicStateRequest = require('./LDGetProfilePublicStateRequest');
var LDRemoveFeaturesFromProfileRequest = require('./LDRemoveFeaturesFromProfileRequest');
var LDAddFeaturesToProfileRequest = require('./LDAddFeaturesToProfileRequest');
var LDRemoveItemsFromProfileRequest = require('./LDRemoveItemsFromProfileRequest');
var LDAddItemsToProfileRequest = require('./LDAddItemsToProfileRequest');
var LDGetOmletContactProfileRequest = require('./LDGetOmletContactProfileRequest');
var LDSetProfileVideoRequest = require('./LDSetProfileVideoRequest');
var LDSetProfilePictureRequest = require('./LDSetProfilePictureRequest');
var LDSetProfileNameRequest = require('./LDSetProfileNameRequest');
var LDGetProfileDetailsRequest = require('./LDGetProfileDetailsRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.GetProfileDetailsRequest=new LDGetProfileDetailsRequest(e['p']);
	if(e['n']!=null)$.SetNameRequest=new LDSetProfileNameRequest(e['n']);
	if(e['sp']!=null)$.SetProfilePictureRequest=new LDSetProfilePictureRequest(e['sp']);
	if(e['sv']!=null)$.SetProfileVideoRequest=new LDSetProfileVideoRequest(e['sv']);
	if(e['c']!=null)$.GetContactProfileRequest=new LDGetOmletContactProfileRequest(e['c']);
	if(e['aip']!=null)$.AddItemsToProfileRequest=new LDAddItemsToProfileRequest(e['aip']);
	if(e['rip']!=null)$.RemoveItemsFromProfileRequest=new LDRemoveItemsFromProfileRequest(e['rip']);
	if(e['afp']!=null)$.AddFeaturesToProfileRequest=new LDAddFeaturesToProfileRequest(e['afp']);
	if(e['rfp']!=null)$.RemoveFeaturesFromProfileRequest=new LDRemoveFeaturesFromProfileRequest(e['rfp']);
	if(e['pps']!=null)$.GetProfilePublicStateRequest=new LDGetProfilePublicStateRequest(e['pps']);
	if(e['ppp']!=null)$.GetProfileDetailsAndPublicStateRequest=new LDGetContactProfileAndPublicStateRequest(e['ppp']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterProfileRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.GetProfileDetailsRequest!=null)o['p']=$.GetProfileDetailsRequest.encode();
	if($.SetNameRequest!=null)o['n']=$.SetNameRequest.encode();
	if($.SetProfilePictureRequest!=null)o['sp']=$.SetProfilePictureRequest.encode();
	if($.SetProfileVideoRequest!=null)o['sv']=$.SetProfileVideoRequest.encode();
	if($.GetContactProfileRequest!=null)o['c']=$.GetContactProfileRequest.encode();
	if($.AddItemsToProfileRequest!=null)o['aip']=$.AddItemsToProfileRequest.encode();
	if($.RemoveItemsFromProfileRequest!=null)o['rip']=$.RemoveItemsFromProfileRequest.encode();
	if($.AddFeaturesToProfileRequest!=null)o['afp']=$.AddFeaturesToProfileRequest.encode();
	if($.RemoveFeaturesFromProfileRequest!=null)o['rfp']=$.RemoveFeaturesFromProfileRequest.encode();
	if($.GetProfilePublicStateRequest!=null)o['pps']=$.GetProfilePublicStateRequest.encode();
	if($.GetProfileDetailsAndPublicStateRequest!=null)o['ppp']=$.GetProfileDetailsAndPublicStateRequest.encode();
	return o;
}
_.GetProfileDetailsRequest=null;
_.SetNameRequest=null;
_.SetProfilePictureRequest=null;
_.SetProfileVideoRequest=null;
_.GetContactProfileRequest=null;
_.AddItemsToProfileRequest=null;
_.RemoveItemsFromProfileRequest=null;
_.AddFeaturesToProfileRequest=null;
_.RemoveFeaturesFromProfileRequest=null;
_.GetProfilePublicStateRequest=null;
_.GetProfileDetailsAndPublicStateRequest=null;

module.exports=O;
