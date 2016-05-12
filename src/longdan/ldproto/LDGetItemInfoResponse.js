var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemInfoContainer = require('./LDItemInfoContainer');

function LDGetItemInfoResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ii']!=null)$.ItemInfoContainer=new LDItemInfoContainer(e['ii']);
}
LDGetItemInfoResponse.prototype=new LDJSONLoggable();
LDGetItemInfoResponse.prototype.constructor = LDGetItemInfoResponse;
var _=LDGetItemInfoResponse.prototype;
_.__type="LDGetItemInfoResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemInfoContainer!=null)o['ii']=$.ItemInfoContainer.encode();
	return o;
}
_.ItemInfoContainer=null;

module.exports=LDGetItemInfoResponse;
