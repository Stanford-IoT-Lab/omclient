var LDBillingInfoContainer = require('./LDBillingInfoContainer');
var LDReceiptContainer = require('./LDReceiptContainer');

function LDPurchaseData(e){
	if(!e)return;
	var $=this;
	if(e['rc']!=null)$.ReceiptContainer=new LDReceiptContainer(e['rc']);
	if(e['bic']!=null)$.BillingInfoContainer=new LDBillingInfoContainer(e['bic']);
}
var _=LDPurchaseData.prototype;
_.__type="LDPurchaseData";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ReceiptContainer!=null)o['rc']=$.ReceiptContainer.encode();
	if($.BillingInfoContainer!=null)o['bic']=$.BillingInfoContainer.encode();
	return o;
}
_.ReceiptContainer=null;
_.BillingInfoContainer=null;

module.exports=LDPurchaseData;
