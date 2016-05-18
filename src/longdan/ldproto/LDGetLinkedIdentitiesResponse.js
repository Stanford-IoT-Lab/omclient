var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['I']!=null){
		$.Identities=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)$.Identities.push(new LDIdentity(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetLinkedIdentitiesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Identities!=null) {
		o['I']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['I'].push(d[k].encode());
	}
	return o;
}
_.Identities=null;

module.exports=O;
