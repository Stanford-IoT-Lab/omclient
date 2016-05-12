var LDMockBillingInfo = require('./LDMockBillingInfo');

function LDBillingInfoContainer(e){
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.MockBillingInfo=new LDMockBillingInfo(e['m']);
}
var _=LDBillingInfoContainer.prototype;
_.__type="LDBillingInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.MockBillingInfo!=null)o['m']=$.MockBillingInfo.encode();
	return o;
}
_.MockBillingInfo=null;

module.exports=LDBillingInfoContainer;
