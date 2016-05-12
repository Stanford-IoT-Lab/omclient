var LDJSONLoggable = require('./LDJSONLoggable');
var LDNearbyItemFeedMetadata = require('./LDNearbyItemFeedMetadata');
var LDFeed = require('./LDFeed');

function LDNearbyItemContainer(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Broadcasted=e['b'];
	$.Expiration=e['e'];
	$.ItemType=e['t'];
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['fm']!=null)$.FeedMetadata=new LDNearbyItemFeedMetadata(e['fm']);
}
LDNearbyItemContainer.prototype=new LDJSONLoggable();
LDNearbyItemContainer.prototype.constructor = LDNearbyItemContainer;
var _=LDNearbyItemContainer.prototype;
_.__type="LDNearbyItemContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Broadcasted!=null)o['b']=$.Broadcasted;
	if($.Expiration!=null)o['e']=$.Expiration;
	if($.ItemType!=null)o['t']=$.ItemType;
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.FeedMetadata!=null)o['fm']=$.FeedMetadata.encode();
	return o;
}
_.Broadcasted=null;
_.Expiration=null;
_.ItemType=null;
_.Feed=null;
_.FeedMetadata=null;

module.exports=LDNearbyItemContainer;
