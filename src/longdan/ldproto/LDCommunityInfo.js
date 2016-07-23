var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.DefaultName=e['dn'];
	if(e['n']!=null){
		$.Names = {};
		var d = e['n'];
		for(var k in d) $.Names[k]=d[k];
	}
	$.ChosenIcon=e['ci'];
	if(e['oi']!=null){
		$.OtherIcons=[];
		var d = e['oi'];
		for(var k=0;k<d.length;++k)$.OtherIcons.push(d[k]);
	}
	$.Banner=e['b'];
	if(e['uci']!=null){
		$.UserCommunityIds=[];
		var d = e['uci'];
		for(var k=0; k<d.length;++k)$.UserCommunityIds.push(new LDCommunityId(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCommunityInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.DefaultName!=null)o['dn']=$.DefaultName;
	if($.Names!=null){
		o['n']={};
		var d=$.Names;
		for(var k in d)o['n'][k]=d[k];
	}
	if($.ChosenIcon!=null)o['ci']=$.ChosenIcon;
	if($.OtherIcons!=null) {
		o['oi']=[];
		var d=$.OtherIcons;
		for(var k=0;k<d.length;++k) o['oi'].push(d[k]);
	}
	if($.Banner!=null)o['b']=$.Banner;
	if($.UserCommunityIds!=null) {
		o['uci']=[];
		var d=$.UserCommunityIds;
		for(var k=0;k<d.length;++k) o['uci'].push(d[k].encode());
	}
	return o;
}
_.DefaultName=null;
_.Names=null;
_.ChosenIcon=null;
_.OtherIcons=null;
_.Banner=null;
_.UserCommunityIds=null;

module.exports=O;
