var LDMockReceipt = require('./LDMockReceipt');

function O(e){
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.MockReceipt=new LDMockReceipt(e['m']);
}
var _=O.prototype;
_.__type="LDReceiptContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.MockReceipt!=null)o['m']=$.MockReceipt.encode();
	return o;
}
_.MockReceipt=null;

module.exports=O;
