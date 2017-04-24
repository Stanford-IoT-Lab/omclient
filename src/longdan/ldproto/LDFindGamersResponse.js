var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null){
		$.Candidates=[];
		var d = e['c'];
		for(var k=0;k<d.length;++k)$.Candidates.push(d[k]);
	}
	$.LocationType=e['lt'];
	$.LocationName=e['ln'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDFindGamersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Candidates!=null) {
		o['c']=[];
		var d=$.Candidates;
		for(var k=0;k<d.length;++k) o['c'].push(d[k]);
	}
	if($.LocationType!=null)o['lt']=$.LocationType;
	if($.LocationName!=null)o['ln']=$.LocationName;
	return o;
}
_.Candidates=null;
_.LocationType=null;
_.LocationName=null;

module.exports=O;
