var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostTagWithLocalization = require('./LDPostTagWithLocalization');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null){
		$.PostTags=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)$.PostTags.push(new LDPostTagWithLocalization(d[k]));
	}
	$.MaxVideoLength=e['l'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetStandardPostTagsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostTags!=null) {
		o['p']=[];
		var d=$.PostTags;
		for(var k=0;k<d.length;++k) o['p'].push(d[k].encode());
	}
	if($.MaxVideoLength!=null)o['l']=$.MaxVideoLength;
	return o;
}
_.PostTags=null;
_.MaxVideoLength=null;

module.exports=O;
