var LDGetTrendingCommunitiesResponse = require('./LDGetTrendingCommunitiesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Locale=e['l'];
	$.TrendingByType=e['tbt'];
	$.TrendingPeriod=e['tp'];
	if(e['ck']!=null)$.ContinuationKey=new Buffer(e['ck'],'base64');
	$.IncludeNonGame=e['ng'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetTrendingCommunitiesRequest";
_.__rt=LDGetTrendingCommunitiesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Locale!=null)o['l']=$.Locale;
	if($.TrendingByType!=null)o['tbt']=$.TrendingByType;
	if($.TrendingPeriod!=null)o['tp']=$.TrendingPeriod;
	if($.ContinuationKey!=null)o['ck']=$.ContinuationKey.toString('base64');
	if($.IncludeNonGame!=null)o['ng']=$.IncludeNonGame;
	return o;
}
_.Locale=null;
_.TrendingByType=null;
_.TrendingPeriod=null;
_.ContinuationKey=null;
_.IncludeNonGame=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gtc":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
