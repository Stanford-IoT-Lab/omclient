var LDJSONLoggable = require('./LDJSONLoggable');
var LDPackageInfo = require('./LDPackageInfo');

function LDGetPackagesResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['I']!=null){
		$.PackageInfos=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)$.PackageInfos.push(new LDPackageInfo(d[k]));
	}
}
LDGetPackagesResponse.prototype=new LDJSONLoggable();
LDGetPackagesResponse.prototype.constructor = LDGetPackagesResponse;
var _=LDGetPackagesResponse.prototype;
_.__type="LDGetPackagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PackageInfos!=null) {
		o['I']=[];
		var d=$.PackageInfos;
		for(var k=0;k<d.length;++k) o['I'].push(d[k].encode());
	}
	return o;
}
_.PackageInfos=null;

module.exports=LDGetPackagesResponse;
