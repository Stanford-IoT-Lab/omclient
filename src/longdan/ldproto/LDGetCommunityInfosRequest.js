var LDGetCommunityInfosResponse = require('./LDGetCommunityInfosResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ci']!=null){
		$.CommunityIds=[];
		var d = e['ci'];
		for(var k=0; k<d.length;++k)$.CommunityIds.push(new LDCommunityId(d[k]));
	}
	$.UserLocale=e['lc'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCommunityInfosRequest";
_.__rt=LDGetCommunityInfosResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityIds!=null) {
		o['ci']=[];
		var d=$.CommunityIds;
		for(var k=0;k<d.length;++k) o['ci'].push(d[k].encode());
	}
	if($.UserLocale!=null)o['lc']=$.UserLocale;
	return o;
}
_.CommunityIds=null;
_.UserLocale=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gci":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
