var LDScoresResponse = require('./LDScoresResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function LDGetTopScoresRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.GameId=new LDItemId(e['id']);
	$.GameScoreboard=e['sb'];
	$.Latitude=e['la'];
	$.Longitude=e['lo'];
	$.NumScores=e['n'];
	$.LocationType=e['l'];
}
LDGetTopScoresRequest.prototype=new LDJSONLoggable();
LDGetTopScoresRequest.prototype.constructor = LDGetTopScoresRequest;
var _=LDGetTopScoresRequest.prototype;
_.__type="LDGetTopScoresRequest";
_.__rt=LDScoresResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.GameId!=null)o['id']=$.GameId.encode();
	if($.GameScoreboard!=null)o['sb']=$.GameScoreboard;
	if($.Latitude!=null)o['la']=$.Latitude;
	if($.Longitude!=null)o['lo']=$.Longitude;
	if($.NumScores!=null)o['n']=$.NumScores;
	if($.LocationType!=null)o['l']=$.LocationType;
	return o;
}
_.GameId=null;
_.GameScoreboard=null;
_.Latitude=null;
_.Longitude=null;
_.NumScores=null;
_.LocationType=null;
LDGetTopScoresRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ts":o};o=t;
	t={"#":id,"h":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetTopScoresRequest;
