var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDUpdateChallengeLocationRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Latitude=e['x'];
	$.Longitude=e['y'];
}
LDUpdateChallengeLocationRequest.prototype=new LDJSONLoggable();
LDUpdateChallengeLocationRequest.prototype.constructor = LDUpdateChallengeLocationRequest;
var _=LDUpdateChallengeLocationRequest.prototype;
_.__type="LDUpdateChallengeLocationRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	return o;
}
_.Latitude=null;
_.Longitude=null;
LDUpdateChallengeLocationRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUpdateChallengeLocationRequest;
