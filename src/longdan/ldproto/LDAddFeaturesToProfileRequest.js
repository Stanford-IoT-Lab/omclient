var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDAddFeaturesToProfileRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)$.Features.push(d[k]);
	}
}
LDAddFeaturesToProfileRequest.prototype=new LDJSONLoggable();
LDAddFeaturesToProfileRequest.prototype.constructor = LDAddFeaturesToProfileRequest;
var _=LDAddFeaturesToProfileRequest.prototype;
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
LDAddFeaturesToProfileRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"afp":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDAddFeaturesToProfileRequest;
