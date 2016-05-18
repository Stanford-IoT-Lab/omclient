var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemInfoContainer = require('./LDItemInfoContainer');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ii']!=null)$.ItemInfoContainer=new LDItemInfoContainer(e['ii']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetItemInfoResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemInfoContainer!=null)o['ii']=$.ItemInfoContainer.encode();
	return o;
}
_.ItemInfoContainer=null;

module.exports=O;
