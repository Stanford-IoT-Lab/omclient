var LDCreateSubscriptionResponse = require('./LDCreateSubscriptionResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDCreateSubscriptionRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ProfilePictureLinkString=e['p'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	$.Type=e['t'];
	$.CanRead=e['r'];
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDCreateSubscriptionRequest.prototype=new LDJSONLoggable();
LDCreateSubscriptionRequest.prototype.constructor = LDCreateSubscriptionRequest;
var _=LDCreateSubscriptionRequest.prototype;
_.__type="LDCreateSubscriptionRequest";
_.__rt=LDCreateSubscriptionResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLinkString!=null)o['p']=$.ProfilePictureLinkString;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	if($.Type!=null)o['t']=$.Type;
	if($.CanRead!=null)o['r']=$.CanRead;
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Name=null;
_.ProfilePictureLinkString=null;
_.ProfileDecryptedHash=null;
_.Type=null;
_.CanRead=null;
_.Feed=null;
LDCreateSubscriptionRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"s":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCreateSubscriptionRequest;
