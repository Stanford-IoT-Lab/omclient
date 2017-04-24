var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityInfoContainer = require('./LDCommunityInfoContainer');
var LDPackageInfo = require('./LDPackageInfo');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['I']!=null){
		$.PackageInfos=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)$.PackageInfos.push(new LDPackageInfo(d[k]));
	}
	if(e['c']!=null){
		$.Communities=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)$.Communities.push(new LDCommunityInfoContainer(d[k]));
	}
	if(e['n']!=null)$.ContinuationKey=new Buffer(e['n'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetAllCommunitiesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PackageInfos!=null) {
		o['I']=[];
		var d=$.PackageInfos;
		for(var k=0;k<d.length;++k) o['I'].push(d[k].encode());
	}
	if($.Communities!=null) {
		o['c']=[];
		var d=$.Communities;
		for(var k=0;k<d.length;++k) o['c'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['n']=$.ContinuationKey.toString('base64');
	return o;
}
_.PackageInfos=null;
_.Communities=null;
_.ContinuationKey=null;

module.exports=O;
