var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityDetailsForUser = require('./LDCommunityDetailsForUser');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null){
		$.Communities=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)$.Communities.push(new LDCommunityDetailsForUser(d[k]));
	}
	if(e['ck']!=null)$.ContinuationKey=new Buffer(e['ck'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCommunitiesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Communities!=null) {
		o['c']=[];
		var d=$.Communities;
		for(var k=0;k<d.length;++k) o['c'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['ck']=$.ContinuationKey.toString('base64');
	return o;
}
_.Communities=null;
_.ContinuationKey=null;

module.exports=O;
