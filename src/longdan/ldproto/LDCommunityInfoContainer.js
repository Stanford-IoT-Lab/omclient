var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');
var LDAppCommunityInfo = require('./LDAppCommunityInfo');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppCommunityInfo=new LDAppCommunityInfo(e['a']);
	$.MemberCount=e['c'];
	$.PostCount=e['p'];
	$.IsMember=e['im'];
	if(e['uci']!=null){
		$.UserCommunityIds=[];
		var d = e['uci'];
		for(var k=0; k<d.length;++k)$.UserCommunityIds.push(new LDCommunityId(d[k]));
	}
	if(e['cci']!=null)$.CanonicalCommunityId=new LDCommunityId(e['cci']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCommunityInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AppCommunityInfo!=null)o['a']=$.AppCommunityInfo.encode();
	if($.MemberCount!=null)o['c']=$.MemberCount;
	if($.PostCount!=null)o['p']=$.PostCount;
	if($.IsMember!=null)o['im']=$.IsMember;
	if($.UserCommunityIds!=null) {
		o['uci']=[];
		var d=$.UserCommunityIds;
		for(var k=0;k<d.length;++k) o['uci'].push(d[k].encode());
	}
	if($.CanonicalCommunityId!=null)o['cci']=$.CanonicalCommunityId.encode();
	return o;
}
_.AppCommunityInfo=null;
_.MemberCount=null;
_.PostCount=null;
_.IsMember=null;
_.UserCommunityIds=null;
_.CanonicalCommunityId=null;

module.exports=O;
