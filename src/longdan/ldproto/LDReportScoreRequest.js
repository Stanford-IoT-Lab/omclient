var LDScoreResponse = require('./LDScoreResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function LDReportScoreRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.GameId=new LDItemId(e['id']);
	$.GameScoreboard=e['sb'];
	$.Score=e['s'];
	$.Latitude=e['la'];
	$.Longitude=e['lo'];
	$.SimilarScoresInCity=e['sc'];
	$.SimilarScoresInCountry=e['su'];
	$.SimilarScoresInContinent=e['st'];
	$.SimilarScoresGlobal=e['sg'];
	$.SimilarScoresLocal=e['sl'];
	$.Account=e['a'];
}
LDReportScoreRequest.prototype=new LDJSONLoggable();
LDReportScoreRequest.prototype.constructor = LDReportScoreRequest;
var _=LDReportScoreRequest.prototype;
_.__type="LDReportScoreRequest";
_.__rt=LDScoreResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.GameId!=null)o['id']=$.GameId.encode();
	if($.GameScoreboard!=null)o['sb']=$.GameScoreboard;
	if($.Score!=null)o['s']=$.Score;
	if($.Latitude!=null)o['la']=$.Latitude;
	if($.Longitude!=null)o['lo']=$.Longitude;
	if($.SimilarScoresInCity!=null)o['sc']=$.SimilarScoresInCity;
	if($.SimilarScoresInCountry!=null)o['su']=$.SimilarScoresInCountry;
	if($.SimilarScoresInContinent!=null)o['st']=$.SimilarScoresInContinent;
	if($.SimilarScoresGlobal!=null)o['sg']=$.SimilarScoresGlobal;
	if($.SimilarScoresLocal!=null)o['sl']=$.SimilarScoresLocal;
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.GameId=null;
_.GameScoreboard=null;
_.Score=null;
_.Latitude=null;
_.Longitude=null;
_.SimilarScoresInCity=null;
_.SimilarScoresInCountry=null;
_.SimilarScoresInContinent=null;
_.SimilarScoresGlobal=null;
_.SimilarScoresLocal=null;
_.Account=null;
LDReportScoreRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"rs":o};o=t;
	t={"#":id,"h":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDReportScoreRequest;
