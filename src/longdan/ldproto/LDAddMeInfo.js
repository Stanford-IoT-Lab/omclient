var LDAppRestletDetails = require('./LDAppRestletDetails');

function O(e){
	if(!e)return;
	var $=this;
	$.Account=e['aa'];
	$.ProfileName=e['an'];
	$.ProfileThumbnailLink=e['ap'];
	$.IntentLink=e['l'];
	$.Pin=e['p'];
	if(e['U']!=null)$.AppId=new Buffer(e['U'],'base64');
	if(e['ad']!=null)$.AppDetails=new LDAppRestletDetails(e['ad']);
	$.MobileOS=e['mo'];
}
var _=O.prototype;
_.__type="LDAddMeInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['aa']=$.Account;
	if($.ProfileName!=null)o['an']=$.ProfileName;
	if($.ProfileThumbnailLink!=null)o['ap']=$.ProfileThumbnailLink;
	if($.IntentLink!=null)o['l']=$.IntentLink;
	if($.Pin!=null)o['p']=$.Pin;
	if($.AppId!=null)o['U']=$.AppId.toString('base64');
	if($.AppDetails!=null)o['ad']=$.AppDetails.encode();
	if($.MobileOS!=null)o['mo']=$.MobileOS;
	return o;
}
_.Account=null;
_.ProfileName=null;
_.ProfileThumbnailLink=null;
_.IntentLink=null;
_.Pin=null;
_.AppId=null;
_.AppDetails=null;
_.MobileOS=null;

module.exports=O;
