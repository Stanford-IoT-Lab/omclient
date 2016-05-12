var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function LDCheckAccountOptedInRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['g']!=null)$.GameId=new LDItemId(e['g']);
}
LDCheckAccountOptedInRequest.prototype=new LDJSONLoggable();
LDCheckAccountOptedInRequest.prototype.constructor = LDCheckAccountOptedInRequest;
var _=LDCheckAccountOptedInRequest.prototype;
_.__type="LDCheckAccountOptedInRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.GameId!=null)o['g']=$.GameId.encode();
	return o;
}
_.Account=null;
_.GameId=null;
LDCheckAccountOptedInRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"co":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCheckAccountOptedInRequest;
