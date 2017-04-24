var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityInfoContainerCommunityId = require('./LDCommunityInfoContainerCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null){
		$.List=[];
		var d = e['l'];
		for(var k=0; k<d.length;++k)$.List.push(new LDCommunityInfoContainerCommunityId(d[k]));
	}
	if(e['ck']!=null)$.ContinuationKey=new Buffer(e['ck'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDListUnverifiedCommunitiesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.List!=null) {
		o['l']=[];
		var d=$.List;
		for(var k=0;k<d.length;++k) o['l'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['ck']=$.ContinuationKey.toString('base64');
	return o;
}
_.List=null;
_.ContinuationKey=null;

module.exports=O;
