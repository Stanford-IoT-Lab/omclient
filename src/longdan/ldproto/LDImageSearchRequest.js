var LDImageSearchResponse = require('./LDImageSearchResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Term=e['t'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDImageSearchRequest";
_.__rt=LDImageSearchResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Term!=null)o['t']=$.Term;
	return o;
}
_.Term=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"is":o};o=t;
	t={"#":id,"M":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
