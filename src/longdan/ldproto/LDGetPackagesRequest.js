var LDGetPackagesResponse = require('./LDGetPackagesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ItemId=new LDItemId(e['i']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPackagesRequest";
_.__rt=LDGetPackagesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gppi":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
