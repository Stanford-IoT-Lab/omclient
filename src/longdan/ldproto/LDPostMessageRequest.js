var LDAddPostResponse = require('./LDAddPostResponse');
var LDPostBaseRequest = require('./LDPostBaseRequest');

function O(e){
	LDPostBaseRequest.call(this,e);
	if(!e)return;
	var $=this;
	$.Link=e['ll'];
	$.LinkTitle=e['lt'];
	$.LinkBody=e['lB'];
	$.LinkThumbnailBlobLink=e['lb'];
	$.LinkThumbnailWidth=e['lw'];
	$.LinkThumbnailHeight=e['lh'];
}
O.prototype=new LDPostBaseRequest();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostMessageRequest";
_.__rt=LDAddPostResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPostBaseRequest.prototype.encode.call($,o);
	if($.Link!=null)o['ll']=$.Link;
	if($.LinkTitle!=null)o['lt']=$.LinkTitle;
	if($.LinkBody!=null)o['lB']=$.LinkBody;
	if($.LinkThumbnailBlobLink!=null)o['lb']=$.LinkThumbnailBlobLink;
	if($.LinkThumbnailWidth!=null)o['lw']=$.LinkThumbnailWidth;
	if($.LinkThumbnailHeight!=null)o['lh']=$.LinkThumbnailHeight;
	return o;
}
_.Link=null;
_.LinkTitle=null;
_.LinkBody=null;
_.LinkThumbnailBlobLink=null;
_.LinkThumbnailWidth=null;
_.LinkThumbnailHeight=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"pm":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
