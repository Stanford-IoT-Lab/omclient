var LDMockReceipt = require('./LDMockReceipt');

function LDReceiptContainer(e){
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.MockReceipt=new LDMockReceipt(e['m']);
}
var _=LDReceiptContainer.prototype;
_.__type="LDReceiptContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.MockReceipt!=null)o['m']=$.MockReceipt.encode();
	return o;
}
_.MockReceipt=null;

module.exports=LDReceiptContainer;
