var LDAppRestletDetails = require('./LDAppRestletDetails');
var LDFeed = require('./LDFeed');

function LDJoinFeedInfo(e){
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Pin=e['p'];
	$.FeedName=e['n'];
	$.FeedThumbnailLink=e['td'];
	$.IntentLink=e['l'];
	$.AdderAccount=e['aa'];
	$.AdderName=e['an'];
	$.AdderThumbnailLink=e['ap'];
	if(e['ad']!=null)$.AppDetails=new LDAppRestletDetails(e['ad']);
	$.MobileOS=e['mo'];
}
var _=LDJoinFeedInfo.prototype;
_.__type="LDJoinFeedInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Pin!=null)o['p']=$.Pin;
	if($.FeedName!=null)o['n']=$.FeedName;
	if($.FeedThumbnailLink!=null)o['td']=$.FeedThumbnailLink;
	if($.IntentLink!=null)o['l']=$.IntentLink;
	if($.AdderAccount!=null)o['aa']=$.AdderAccount;
	if($.AdderName!=null)o['an']=$.AdderName;
	if($.AdderThumbnailLink!=null)o['ap']=$.AdderThumbnailLink;
	if($.AppDetails!=null)o['ad']=$.AppDetails.encode();
	if($.MobileOS!=null)o['mo']=$.MobileOS;
	return o;
}
_.Feed=null;
_.Pin=null;
_.FeedName=null;
_.FeedThumbnailLink=null;
_.IntentLink=null;
_.AdderAccount=null;
_.AdderName=null;
_.AdderThumbnailLink=null;
_.AppDetails=null;
_.MobileOS=null;

module.exports=LDJoinFeedInfo;
