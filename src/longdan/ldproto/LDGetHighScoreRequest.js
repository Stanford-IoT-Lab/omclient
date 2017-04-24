var LDScoreResponse = require('./LDScoreResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.GameId=new LDItemId(e['id']);
	$.GameScoreboard=e['sb'];
	$.Account=e['a'];
	$.Latitude=e['la'];
	$.Longitude=e['lo'];
	$.SimilarScoresInCity=e['sc'];
	$.SimilarScoresInCountry=e['su'];
	$.SimilarScoresInContinent=e['st'];
	$.SimilarScoresGlobal=e['sg'];
	$.SimilarScoresLocal=e['sl'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetHighScoreRequest";
_.__rt=LDScoreResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.GameId!=null)o['id']=$.GameId.encode();
	if($.GameScoreboard!=null)o['sb']=$.GameScoreboard;
	if($.Account!=null)o['a']=$.Account;
	if($.Latitude!=null)o['la']=$.Latitude;
	if($.Longitude!=null)o['lo']=$.Longitude;
	if($.SimilarScoresInCity!=null)o['sc']=$.SimilarScoresInCity;
	if($.SimilarScoresInCountry!=null)o['su']=$.SimilarScoresInCountry;
	if($.SimilarScoresInContinent!=null)o['st']=$.SimilarScoresInContinent;
	if($.SimilarScoresGlobal!=null)o['sg']=$.SimilarScoresGlobal;
	if($.SimilarScoresLocal!=null)o['sl']=$.SimilarScoresLocal;
	return o;
}
_.GameId=null;
_.GameScoreboard=null;
_.Account=null;
_.Latitude=null;
_.Longitude=null;
_.SimilarScoresInCity=null;
_.SimilarScoresInCountry=null;
_.SimilarScoresInContinent=null;
_.SimilarScoresGlobal=null;
_.SimilarScoresLocal=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"hs":o};o=t;
	t={"#":id,"h":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
