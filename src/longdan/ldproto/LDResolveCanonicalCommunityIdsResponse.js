var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null){
		$.CanonicalCommunityIds=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)$.CanonicalCommunityIds.push(new LDCommunityId(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDResolveCanonicalCommunityIdsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CanonicalCommunityIds!=null) {
		o['c']=[];
		var d=$.CanonicalCommunityIds;
		for(var k=0;k<d.length;++k) o['c'].push(d[k].encode());
	}
	return o;
}
_.CanonicalCommunityIds=null;

module.exports=O;
