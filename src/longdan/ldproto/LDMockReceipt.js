function LDMockReceipt(e){
	if(!e)return;
	var $=this;
	if(e['j']!=null)$.Junk=new Buffer(e['j'],'base64');
}
var _=LDMockReceipt.prototype;
_.__type="LDMockReceipt";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Junk!=null)o['j']=$.Junk.toString('base64');
	return o;
}
_.Junk=null;

module.exports=LDMockReceipt;
