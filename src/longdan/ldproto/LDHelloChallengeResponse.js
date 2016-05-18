var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.SourceChallenge=new Buffer(e['c'],'base64');
	if(e['r']!=null)$.DestinationResponse=new Buffer(e['r'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDHelloChallengeResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.SourceChallenge!=null)o['c']=$.SourceChallenge.toString('base64');
	if($.DestinationResponse!=null)o['r']=$.DestinationResponse.toString('base64');
	return o;
}
_.SourceChallenge=null;
_.DestinationResponse=null;

module.exports=O;
