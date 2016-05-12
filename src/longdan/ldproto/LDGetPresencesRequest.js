var LDGetPresencesResponse = require('./LDGetPresencesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDGetPresencesRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['A']!=null){
		$.Accounts=[];
		var d = e['A'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
}
LDGetPresencesRequest.prototype=new LDJSONLoggable();
LDGetPresencesRequest.prototype.constructor = LDGetPresencesRequest;
var _=LDGetPresencesRequest.prototype;
_.__type="LDGetPresencesRequest";
_.__rt=LDGetPresencesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Accounts!=null) {
		o['A']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['A'].push(d[k]);
	}
	return o;
}
_.Accounts=null;
LDGetPresencesRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"g":o};o=t;
	t={"#":id,"ps":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetPresencesRequest;
