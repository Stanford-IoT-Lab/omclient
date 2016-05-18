var LDJSONLoggable = require('./LDJSONLoggable');
var LDScoreBoardEntry = require('./LDScoreBoardEntry');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.City=e['c'];
	$.CityScore=e['cs'];
	$.CityRank=e['cr'];
	$.CityPercentile=e['cp'];
	if(e['css']!=null){
		$.CitySimilarScores=[];
		var d = e['css'];
		for(var k=0; k<d.length;++k)$.CitySimilarScores.push(new LDScoreBoardEntry(d[k]));
	}
	$.Country=e['u'];
	$.CountryScore=e['us'];
	$.CountryRank=e['ur'];
	$.CountryPercentile=e['up'];
	if(e['uss']!=null){
		$.CountrySimilarScores=[];
		var d = e['uss'];
		for(var k=0; k<d.length;++k)$.CountrySimilarScores.push(new LDScoreBoardEntry(d[k]));
	}
	$.Continent=e['t'];
	$.ContinentScore=e['ts'];
	$.ContinentRank=e['tr'];
	$.ContinentPercentile=e['tp'];
	if(e['tss']!=null){
		$.ContinentSimilarScores=[];
		var d = e['tss'];
		for(var k=0; k<d.length;++k)$.ContinentSimilarScores.push(new LDScoreBoardEntry(d[k]));
	}
	$.GlobalScore=e['gs'];
	$.GlobalRank=e['gr'];
	$.GlobalPercentile=e['gp'];
	if(e['gss']!=null){
		$.GlobalSimilarScores=[];
		var d = e['gss'];
		for(var k=0; k<d.length;++k)$.GlobalSimilarScores.push(new LDScoreBoardEntry(d[k]));
	}
	$.LocalLevel=e['ll'];
	$.LocalLocationName=e['ln'];
	$.LocalScore=e['ls'];
	$.LocalRank=e['lr'];
	$.LocalPercentile=e['lp'];
	if(e['lss']!=null){
		$.LocalSimilarScores=[];
		var d = e['lss'];
		for(var k=0; k<d.length;++k)$.LocalSimilarScores.push(new LDScoreBoardEntry(d[k]));
	}
	$.DistanceBestFor=e['dbf'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDScoreResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.City!=null)o['c']=$.City;
	if($.CityScore!=null)o['cs']=$.CityScore;
	if($.CityRank!=null)o['cr']=$.CityRank;
	if($.CityPercentile!=null)o['cp']=$.CityPercentile;
	if($.CitySimilarScores!=null) {
		o['css']=[];
		var d=$.CitySimilarScores;
		for(var k=0;k<d.length;++k) o['css'].push(d[k].encode());
	}
	if($.Country!=null)o['u']=$.Country;
	if($.CountryScore!=null)o['us']=$.CountryScore;
	if($.CountryRank!=null)o['ur']=$.CountryRank;
	if($.CountryPercentile!=null)o['up']=$.CountryPercentile;
	if($.CountrySimilarScores!=null) {
		o['uss']=[];
		var d=$.CountrySimilarScores;
		for(var k=0;k<d.length;++k) o['uss'].push(d[k].encode());
	}
	if($.Continent!=null)o['t']=$.Continent;
	if($.ContinentScore!=null)o['ts']=$.ContinentScore;
	if($.ContinentRank!=null)o['tr']=$.ContinentRank;
	if($.ContinentPercentile!=null)o['tp']=$.ContinentPercentile;
	if($.ContinentSimilarScores!=null) {
		o['tss']=[];
		var d=$.ContinentSimilarScores;
		for(var k=0;k<d.length;++k) o['tss'].push(d[k].encode());
	}
	if($.GlobalScore!=null)o['gs']=$.GlobalScore;
	if($.GlobalRank!=null)o['gr']=$.GlobalRank;
	if($.GlobalPercentile!=null)o['gp']=$.GlobalPercentile;
	if($.GlobalSimilarScores!=null) {
		o['gss']=[];
		var d=$.GlobalSimilarScores;
		for(var k=0;k<d.length;++k) o['gss'].push(d[k].encode());
	}
	if($.LocalLevel!=null)o['ll']=$.LocalLevel;
	if($.LocalLocationName!=null)o['ln']=$.LocalLocationName;
	if($.LocalScore!=null)o['ls']=$.LocalScore;
	if($.LocalRank!=null)o['lr']=$.LocalRank;
	if($.LocalPercentile!=null)o['lp']=$.LocalPercentile;
	if($.LocalSimilarScores!=null) {
		o['lss']=[];
		var d=$.LocalSimilarScores;
		for(var k=0;k<d.length;++k) o['lss'].push(d[k].encode());
	}
	if($.DistanceBestFor!=null)o['dbf']=$.DistanceBestFor;
	return o;
}
_.City=null;
_.CityScore=null;
_.CityRank=null;
_.CityPercentile=null;
_.CitySimilarScores=null;
_.Country=null;
_.CountryScore=null;
_.CountryRank=null;
_.CountryPercentile=null;
_.CountrySimilarScores=null;
_.Continent=null;
_.ContinentScore=null;
_.ContinentRank=null;
_.ContinentPercentile=null;
_.ContinentSimilarScores=null;
_.GlobalScore=null;
_.GlobalRank=null;
_.GlobalPercentile=null;
_.GlobalSimilarScores=null;
_.LocalLevel=null;
_.LocalLocationName=null;
_.LocalScore=null;
_.LocalRank=null;
_.LocalPercentile=null;
_.LocalSimilarScores=null;
_.DistanceBestFor=null;

module.exports=O;
