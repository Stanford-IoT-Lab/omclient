var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDUserCustomCommunityInfoContainer = require('./LDUserCustomCommunityInfoContainer');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cid']!=null)$.CommunityId=new LDCommunityId(e['cid']);
	if(e['uccic']!=null)$.UserCustomAppCommunityInfo=new LDUserCustomCommunityInfoContainer(e['uccic']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDJoinCommunityRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityId!=null)o['cid']=$.CommunityId.encode();
	if($.UserCustomAppCommunityInfo!=null)o['uccic']=$.UserCustomAppCommunityInfo.encode();
	return o;
}
_.CommunityId=null;
_.UserCustomAppCommunityInfo=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ag":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
