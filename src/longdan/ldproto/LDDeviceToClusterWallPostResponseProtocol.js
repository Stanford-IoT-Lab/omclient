var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetPackagesResponse = require('./LDGetPackagesResponse');
var LDGetExternalShareLinkResponse = require('./LDGetExternalShareLinkResponse');
var LDGetFollowersResponse = require('./LDGetFollowersResponse');
var LDGetStandardPostTagsResponse = require('./LDGetStandardPostTagsResponse');
var LDGetAccountsFollowedResponse = require('./LDGetAccountsFollowedResponse');
var LDAddPostResponse = require('./LDAddPostResponse');
var LDGetPostResponse = require('./LDGetPostResponse');
var LDWallsResponse = require('./LDWallsResponse');
var LDWallResponse = require('./LDWallResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['w']!=null)$.WallResponse=new LDWallResponse(e['w']);
	if(e['ws']!=null)$.WallsResponse=new LDWallsResponse(e['ws']);
	if(e['gp']!=null)$.GetPostResponse=new LDGetPostResponse(e['gp']);
	if(e['ap']!=null)$.AddPostResponse=new LDAddPostResponse(e['ap']);
	if(e['gaf']!=null)$.GetAccountsFollowedResponse=new LDGetAccountsFollowedResponse(e['gaf']);
	if(e['gspt']!=null)$.GetStandardPostTagsResponse=new LDGetStandardPostTagsResponse(e['gspt']);
	if(e['gf']!=null)$.GetFollowersResponse=new LDGetFollowersResponse(e['gf']);
	if(e['ges']!=null)$.GetExternalShareLink=new LDGetExternalShareLinkResponse(e['ges']);
	if(e['gppi']!=null)$.GetPackagesResponse=new LDGetPackagesResponse(e['gppi']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterWallPostResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.WallResponse!=null)o['w']=$.WallResponse.encode();
	if($.WallsResponse!=null)o['ws']=$.WallsResponse.encode();
	if($.GetPostResponse!=null)o['gp']=$.GetPostResponse.encode();
	if($.AddPostResponse!=null)o['ap']=$.AddPostResponse.encode();
	if($.GetAccountsFollowedResponse!=null)o['gaf']=$.GetAccountsFollowedResponse.encode();
	if($.GetStandardPostTagsResponse!=null)o['gspt']=$.GetStandardPostTagsResponse.encode();
	if($.GetFollowersResponse!=null)o['gf']=$.GetFollowersResponse.encode();
	if($.GetExternalShareLink!=null)o['ges']=$.GetExternalShareLink.encode();
	if($.GetPackagesResponse!=null)o['gppi']=$.GetPackagesResponse.encode();
	return o;
}
_.WallResponse=null;
_.WallsResponse=null;
_.GetPostResponse=null;
_.AddPostResponse=null;
_.GetAccountsFollowedResponse=null;
_.GetStandardPostTagsResponse=null;
_.GetFollowersResponse=null;
_.GetExternalShareLink=null;
_.GetPackagesResponse=null;

module.exports=O;
