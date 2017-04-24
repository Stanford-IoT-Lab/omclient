var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityInfoContainer = require('./LDCommunityInfoContainer');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cid']!=null)$.CommunityId=new LDCommunityId(e['cid']);
	if(e['c']!=null)$.CommunityInfoContainer=new LDCommunityInfoContainer(e['c']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDUploadCommunityDetailsRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityId!=null)o['cid']=$.CommunityId.encode();
	if($.CommunityInfoContainer!=null)o['c']=$.CommunityInfoContainer.encode();
	return o;
}
_.CommunityId=null;
_.CommunityInfoContainer=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ucd":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
