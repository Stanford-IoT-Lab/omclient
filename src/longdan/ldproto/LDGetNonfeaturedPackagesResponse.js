var LDJSONLoggable = require('./LDJSONLoggable');
var LDPackageIdLocale = require('./LDPackageIdLocale');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null){
		$.Packages=[];
		var d = e['l'];
		for(var k=0; k<d.length;++k)$.Packages.push(new LDPackageIdLocale(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetNonfeaturedPackagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Packages!=null) {
		o['l']=[];
		var d=$.Packages;
		for(var k=0;k<d.length;++k) o['l'].push(d[k].encode());
	}
	return o;
}
_.Packages=null;

module.exports=O;
