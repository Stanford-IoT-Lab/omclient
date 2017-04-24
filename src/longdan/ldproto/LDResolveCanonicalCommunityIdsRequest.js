var LDResolveCanonicalCommunityIdsResponse = require('./LDResolveCanonicalCommunityIdsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cid']!=null){
		$.CommunityIds=[];
		var d = e['cid'];
		for(var k=0; k<d.length;++k)$.CommunityIds.push(new LDCommunityId(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDResolveCanonicalCommunityIdsRequest";
_.__rt=LDResolveCanonicalCommunityIdsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityIds!=null) {
		o['cid']=[];
		var d=$.CommunityIds;
		for(var k=0;k<d.length;++k) o['cid'].push(d[k].encode());
	}
	return o;
}
_.CommunityIds=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"rcpid":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
