var LDAddPostResponse = require('./LDAddPostResponse');
var LDPostBaseRequest = require('./LDPostBaseRequest');
var LDPostTag = require('./LDPostTag');

function LDPostScreenShotRequest(e){
	LDPostBaseRequest.call(this,e);
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	$.ThumbnailLinkString=e['tn'];
	if(e['pt']!=null)$.PrimaryTag=new LDPostTag(e['pt']);
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new LDPostTag(d[k]));
	}
	$.Width=e['W'];
	$.Height=e['H'];
}
LDPostScreenShotRequest.prototype=new LDPostBaseRequest();
LDPostScreenShotRequest.prototype.constructor = LDPostScreenShotRequest;
var _=LDPostScreenShotRequest.prototype;
_.__type="LDPostScreenShotRequest";
_.__rt=LDAddPostResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPostBaseRequest.prototype.encode.call($,o);
	if($.Title!=null)o['t']=$.Title;
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.ThumbnailLinkString!=null)o['tn']=$.ThumbnailLinkString;
	if($.PrimaryTag!=null)o['pt']=$.PrimaryTag.encode();
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	if($.Width!=null)o['W']=$.Width;
	if($.Height!=null)o['H']=$.Height;
	return o;
}
_.Title=null;
_.Description=null;
_.BlobLinkString=null;
_.ThumbnailLinkString=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
_.Width=null;
_.Height=null;
LDPostScreenShotRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ps":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDPostScreenShotRequest;
