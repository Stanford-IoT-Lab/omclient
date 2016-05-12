var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDSetProfileNameRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Name=e['n'];
}
LDSetProfileNameRequest.prototype=new LDJSONLoggable();
LDSetProfileNameRequest.prototype.constructor = LDSetProfileNameRequest;
var _=LDSetProfileNameRequest.prototype;
_.__type="LDSetProfileNameRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Name!=null)o['n']=$.Name;
	return o;
}
_.Name=null;
LDSetProfileNameRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"n":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetProfileNameRequest;
