var LDFeatureSetting = require('./LDFeatureSetting');

function LDProfilePublicState(e){
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)$.Features.push(d[k]);
	}
	if(e['p']!=null){
		$.Settings = {};
		var d = e['p'];
		for(var k in d) $.Settings[k]=new LDFeatureSetting(d[k]);
	}
}
var _=LDProfilePublicState.prototype;
_.__type="LDProfilePublicState";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Features!=null) {
		o['f']=[];
		var d=$.Features;
		for(var k=0;k<d.length;++k) o['f'].push(d[k]);
	}
	if($.Settings!=null){
		o['p']={};
		var d=$.Settings;
		for(var k in d)o['p'][k]=d[k].encode();
	}
	return o;
}
_.Features=null;
_.Settings=null;

module.exports=LDProfilePublicState;
