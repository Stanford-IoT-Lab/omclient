var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null){
		$.Maps = {};
		var d = e['m'];
		for(var k in d) $.Maps[k]=d[k];
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPokemonMapResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Maps!=null){
		o['m']={};
		var d=$.Maps;
		for(var k in d)o['m'][k]=d[k];
	}
	return o;
}
_.Maps=null;

module.exports=O;
