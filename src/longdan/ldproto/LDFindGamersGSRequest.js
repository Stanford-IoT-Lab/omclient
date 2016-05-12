var LDFindGamersResponse = require('./LDFindGamersResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function LDFindGamersGSRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Latitude=e['x'];
	$.Longitude=e['y'];
	if(e['g']!=null)$.GameId=new LDItemId(e['g']);
	$.Tier=e['t'];
}
LDFindGamersGSRequest.prototype=new LDJSONLoggable();
LDFindGamersGSRequest.prototype.constructor = LDFindGamersGSRequest;
var _=LDFindGamersGSRequest.prototype;
_.__type="LDFindGamersGSRequest";
_.__rt=LDFindGamersResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	if($.GameId!=null)o['g']=$.GameId.encode();
	if($.Tier!=null)o['t']=$.Tier;
	return o;
}
_.Latitude=null;
_.Longitude=null;
_.GameId=null;
_.Tier=null;
LDFindGamersGSRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"fgs":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDFindGamersGSRequest;
