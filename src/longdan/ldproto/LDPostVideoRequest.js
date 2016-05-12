var LDAddPostResponse = require('./LDAddPostResponse');
var LDPostBaseRequest = require('./LDPostBaseRequest');
var LDPostTag = require('./LDPostTag');

function LDPostVideoRequest(e){
	LDPostBaseRequest.call(this,e);
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	if(e['r']!=null)$.VideoBlobRefTag=new Buffer(e['r'],'base64');
	$.Duration=e['dr'];
	$.ThumbnailBlobLinkString=e['B'];
	$.Height=e['H'];
	$.Width=e['W'];
	if(e['pt']!=null)$.PrimaryTag=new LDPostTag(e['pt']);
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new LDPostTag(d[k]));
	}
}
LDPostVideoRequest.prototype=new LDPostBaseRequest();
LDPostVideoRequest.prototype.constructor = LDPostVideoRequest;
var _=LDPostVideoRequest.prototype;
_.__type="LDPostVideoRequest";
_.__rt=LDAddPostResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPostBaseRequest.prototype.encode.call($,o);
	if($.Title!=null)o['t']=$.Title;
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.VideoBlobRefTag!=null)o['r']=$.VideoBlobRefTag.toString('base64');
	if($.Duration!=null)o['dr']=$.Duration;
	if($.ThumbnailBlobLinkString!=null)o['B']=$.ThumbnailBlobLinkString;
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	if($.PrimaryTag!=null)o['pt']=$.PrimaryTag.encode();
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	return o;
}
_.Title=null;
_.Description=null;
_.BlobLinkString=null;
_.VideoBlobRefTag=null;
_.Duration=null;
_.ThumbnailBlobLinkString=null;
_.Height=null;
_.Width=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
LDPostVideoRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"pv":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDPostVideoRequest;
