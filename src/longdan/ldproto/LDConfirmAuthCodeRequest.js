var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDConfirmAuthCodeRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AuthCode=e['a'];
	$.QueryKey=e['k'];
	$.IpAddress=e['p'];
}
LDConfirmAuthCodeRequest.prototype=new LDJSONLoggable();
LDConfirmAuthCodeRequest.prototype.constructor = LDConfirmAuthCodeRequest;
var _=LDConfirmAuthCodeRequest.prototype;
_.__type="LDConfirmAuthCodeRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AuthCode!=null)o['a']=$.AuthCode;
	if($.QueryKey!=null)o['k']=$.QueryKey;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	return o;
}
_.AuthCode=null;
_.QueryKey=null;
_.IpAddress=null;
LDConfirmAuthCodeRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"C":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDConfirmAuthCodeRequest;
