var LDJSONLoggable = require('./LDJSONLoggable');
var LDPresenceState = require('./LDPresenceState');

function LDGetPresencesResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['S']!=null){
		$.States=[];
		var d = e['S'];
		for(var k=0; k<d.length;++k)$.States.push(new LDPresenceState(d[k]));
	}
}
LDGetPresencesResponse.prototype=new LDJSONLoggable();
LDGetPresencesResponse.prototype.constructor = LDGetPresencesResponse;
var _=LDGetPresencesResponse.prototype;
_.__type="LDGetPresencesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.States!=null) {
		o['S']=[];
		var d=$.States;
		for(var k=0;k<d.length;++k) o['S'].push(d[k].encode());
	}
	return o;
}
_.States=null;

module.exports=LDGetPresencesResponse;
