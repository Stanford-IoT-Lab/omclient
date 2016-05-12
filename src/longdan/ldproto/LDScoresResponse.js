var LDJSONLoggable = require('./LDJSONLoggable');
var LDScoreBoardEntry = require('./LDScoreBoardEntry');

function LDScoresResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.LocationType=e['lt'];
	$.LocationName=e['ln'];
	if(e['s']!=null){
		$.Scores=[];
		var d = e['s'];
		for(var k=0; k<d.length;++k)$.Scores.push(new LDScoreBoardEntry(d[k]));
	}
}
LDScoresResponse.prototype=new LDJSONLoggable();
LDScoresResponse.prototype.constructor = LDScoresResponse;
var _=LDScoresResponse.prototype;
_.__type="LDScoresResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.LocationType!=null)o['lt']=$.LocationType;
	if($.LocationName!=null)o['ln']=$.LocationName;
	if($.Scores!=null) {
		o['s']=[];
		var d=$.Scores;
		for(var k=0;k<d.length;++k) o['s'].push(d[k].encode());
	}
	return o;
}
_.LocationType=null;
_.LocationName=null;
_.Scores=null;

module.exports=LDScoresResponse;
