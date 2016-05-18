var LDMockBillingInfo = require('./LDMockBillingInfo');

function O(e){
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.MockBillingInfo=new LDMockBillingInfo(e['m']);
}
var _=O.prototype;
_.__type="LDBillingInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.MockBillingInfo!=null)o['m']=$.MockBillingInfo.encode();
	return o;
}
_.MockBillingInfo=null;

module.exports=O;
