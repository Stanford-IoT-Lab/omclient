var LDGetAppDetailsResponse = require('./LDGetAppDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null){
		$.PackageIds=[];
		var d = e['p'];
		for(var k=0;k<d.length;++k)$.PackageIds.push(d[k]);
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetAppDetailsRequest";
_.__rt=LDGetAppDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PackageIds!=null) {
		o['p']=[];
		var d=$.PackageIds;
		for(var k=0;k<d.length;++k) o['p'].push(d[k]);
	}
	return o;
}
_.PackageIds=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gad":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
