var LDCommunityInfoContainer = require('./LDCommunityInfoContainer');
var LDCommunityIdKey = require('./LDCommunityIdKey');

function O(e){
	LDCommunityInfoContainer.call(this,e);
	if(!e)return;
	var $=this;
	if(e['k']!=null)$.CommunityIdKey=new LDCommunityIdKey(e['k']);
}
O.prototype=new LDCommunityInfoContainer();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCommunityInfoContainerCommunityId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDCommunityInfoContainer.prototype.encode.call($,o);
	if($.CommunityIdKey!=null)o['k']=$.CommunityIdKey.encode();
	return o;
}
_.CommunityIdKey=null;

module.exports=O;
