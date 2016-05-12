var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function LDRemoveItemsFromProfileRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new LDItemId(d[k]));
	}
}
LDRemoveItemsFromProfileRequest.prototype=new LDJSONLoggable();
LDRemoveItemsFromProfileRequest.prototype.constructor = LDRemoveItemsFromProfileRequest;
var _=LDRemoveItemsFromProfileRequest.prototype;
_.__type="LDRemoveItemsFromProfileRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.ItemType=null;
_.Items=null;
LDRemoveItemsFromProfileRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"rip":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDRemoveItemsFromProfileRequest;
