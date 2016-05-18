var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)$.Features.push(d[k]);
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAddFeaturesToProfileRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Features!=null) {
		o['f']=[];
		var d=$.Features;
		for(var k=0;k<d.length;++k) o['f'].push(d[k]);
	}
	return o;
}
_.Features=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"afp":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
