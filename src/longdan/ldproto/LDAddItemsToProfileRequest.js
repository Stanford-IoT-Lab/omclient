var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPurchaseData = require('./LDPurchaseData');
var LDItemId = require('./LDItemId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new LDItemId(d[k]));
	}
	if(e['pd']!=null)$.PurchaseData=new LDPurchaseData(e['pd']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDAddItemsToProfileRequest";
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
	if($.PurchaseData!=null)o['pd']=$.PurchaseData.encode();
	return o;
}
_.ItemType=null;
_.Items=null;
_.PurchaseData=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"aip":o};o=t;
	t={"#":id,"p":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
