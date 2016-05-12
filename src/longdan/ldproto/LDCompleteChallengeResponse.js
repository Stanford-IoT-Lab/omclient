var LDJSONLoggable = require('./LDJSONLoggable');

function LDCompleteChallengeResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.LocationIndicator=e['l'];
}
LDCompleteChallengeResponse.prototype=new LDJSONLoggable();
LDCompleteChallengeResponse.prototype.constructor = LDCompleteChallengeResponse;
var _=LDCompleteChallengeResponse.prototype;
_.__type="LDCompleteChallengeResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.LocationIndicator!=null)o['l']=$.LocationIndicator;
	return o;
}
_.LocationIndicator=null;

module.exports=LDCompleteChallengeResponse;
