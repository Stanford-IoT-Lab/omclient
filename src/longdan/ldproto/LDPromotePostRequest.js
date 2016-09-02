var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostContainer = require('./LDPostContainer');
var LDPostId = require('./LDPostId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.PostId=new LDPostId(e['i']);
	$.Promoted=e['p'];
	if(e['d']!=null)$.Container=new LDPostContainer(e['d']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPromotePostRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['i']=$.PostId.encode();
	if($.Promoted!=null)o['p']=$.Promoted;
	if($.Container!=null)o['d']=$.Container.encode();
	return o;
}
_.PostId=null;
_.Promoted=null;
_.Container=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"pp":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
