function O(e){
	if(!e)return;
	var $=this;
	$.Provider=e['p'];
	$.Certificate=e['c'];
	$.ConsumerToken=e['ct'];
	$.ConsumerSecret=e['cs'];
	$.AccessToken=e['at'];
	$.AccessSecret=e['as'];
	$.RefreshToken=e['rt'];
	$.Expiration=e['e'];
	$.BlobsFolder=e['f'];
}
var _=O.prototype;
_.__type="LDCloudConfig";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Provider!=null)o['p']=$.Provider;
	if($.Certificate!=null)o['c']=$.Certificate;
	if($.ConsumerToken!=null)o['ct']=$.ConsumerToken;
	if($.ConsumerSecret!=null)o['cs']=$.ConsumerSecret;
	if($.AccessToken!=null)o['at']=$.AccessToken;
	if($.AccessSecret!=null)o['as']=$.AccessSecret;
	if($.RefreshToken!=null)o['rt']=$.RefreshToken;
	if($.Expiration!=null)o['e']=$.Expiration;
	if($.BlobsFolder!=null)o['f']=$.BlobsFolder;
	return o;
}
_.Provider=null;
_.Certificate=null;
_.ConsumerToken=null;
_.ConsumerSecret=null;
_.AccessToken=null;
_.AccessSecret=null;
_.RefreshToken=null;
_.Expiration=null;
_.BlobsFolder=null;

module.exports=O;
