var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['l'];
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDVerifyExistsAndPermanenceRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['l']=$.BlobLinkString;
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ve":o};o=t;
	t={"#":id,"b":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
