var LDAddPostResponse = require('./LDAddPostResponse');
var LDPostBaseRequest = require('./LDPostBaseRequest');

function O(e){
	LDPostBaseRequest.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['b'];
	$.ThumbnailLinkString=e['tn'];
	$.Width=e['W'];
	$.Height=e['H'];
}
O.prototype=new LDPostBaseRequest();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostScreenShotRequest";
_.__rt=LDAddPostResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPostBaseRequest.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.ThumbnailLinkString!=null)o['tn']=$.ThumbnailLinkString;
	if($.Width!=null)o['W']=$.Width;
	if($.Height!=null)o['H']=$.Height;
	return o;
}
_.BlobLinkString=null;
_.ThumbnailLinkString=null;
_.Width=null;
_.Height=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ps":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
