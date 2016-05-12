var LDJSONLoggable = require('./LDJSONLoggable');

function LDNearbyItemFeedMetadata(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.FeedName=e['n'];
	$.ThumbnailLink=e['t'];
	if(e['d']!=null)$.ThumbnailDecryptedHash=new Buffer(e['d'],'base64');
	$.RequiresPin=e['p'];
	$.Latitude=e['l'];
	$.Longitude=e['g'];
	$.BroadcasterAccount=e['b'];
}
LDNearbyItemFeedMetadata.prototype=new LDJSONLoggable();
LDNearbyItemFeedMetadata.prototype.constructor = LDNearbyItemFeedMetadata;
var _=LDNearbyItemFeedMetadata.prototype;
_.__type="LDNearbyItemFeedMetadata";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.FeedName!=null)o['n']=$.FeedName;
	if($.ThumbnailLink!=null)o['t']=$.ThumbnailLink;
	if($.ThumbnailDecryptedHash!=null)o['d']=$.ThumbnailDecryptedHash.toString('base64');
	if($.RequiresPin!=null)o['p']=$.RequiresPin;
	if($.Latitude!=null)o['l']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.BroadcasterAccount!=null)o['b']=$.BroadcasterAccount;
	return o;
}
_.FeedName=null;
_.ThumbnailLink=null;
_.ThumbnailDecryptedHash=null;
_.RequiresPin=null;
_.Latitude=null;
_.Longitude=null;
_.BroadcasterAccount=null;

module.exports=LDNearbyItemFeedMetadata;
