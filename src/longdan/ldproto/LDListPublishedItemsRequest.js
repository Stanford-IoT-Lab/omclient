var LDListItemsResponse = require('./LDListItemsResponse');

function O(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.LastModified=e['lm'];
}
var _=O.prototype;
_.__type="LDListPublishedItemsRequest";
_.__rt=LDListItemsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.LastModified!=null)o['lm']=$.LastModified;
	return o;
}
_.ItemType=null;
_.ContinuationKey=null;
_.LastModified=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"lp":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
