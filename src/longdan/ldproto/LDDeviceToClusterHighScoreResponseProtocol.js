var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDScoresResponse = require('./LDScoresResponse');
var LDScoreResponse = require('./LDScoreResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['s']!=null)$.ScoreResponse=new LDScoreResponse(e['s']);
	if(e['ss']!=null)$.ScoresResponse=new LDScoresResponse(e['ss']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterHighScoreResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.ScoreResponse!=null)o['s']=$.ScoreResponse.encode();
	if($.ScoresResponse!=null)o['ss']=$.ScoresResponse.encode();
	return o;
}
_.ScoreResponse=null;
_.ScoresResponse=null;

module.exports=O;
