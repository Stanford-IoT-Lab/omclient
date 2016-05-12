var LDJSONLoggable = require('./LDJSONLoggable');

function LDGameChallengeId(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['i']!=null)$.Id=new Buffer(e['i'],'base64');
}
LDGameChallengeId.prototype=new LDJSONLoggable();
LDGameChallengeId.prototype.constructor = LDGameChallengeId;
var _=LDGameChallengeId.prototype;
_.__type="LDGameChallengeId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Id!=null)o['i']=$.Id.toString('base64');
	return o;
}
_.Account=null;
_.Id=null;

module.exports=LDGameChallengeId;
