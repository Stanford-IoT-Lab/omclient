var LDFindGamersResponse = require('./LDFindGamersResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function LDFindGamersRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GameId=new LDItemId(e['g']);
	$.Latitude=e['x'];
	$.Longitude=e['y'];
}
LDFindGamersRequest.prototype=new LDJSONLoggable();
LDFindGamersRequest.prototype.constructor = LDFindGamersRequest;
var _=LDFindGamersRequest.prototype;
_.__type="LDFindGamersRequest";
_.__rt=LDFindGamersResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.GameId!=null)o['g']=$.GameId.encode();
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	return o;
}
_.GameId=null;
_.Latitude=null;
_.Longitude=null;
LDFindGamersRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"f":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDFindGamersRequest;
