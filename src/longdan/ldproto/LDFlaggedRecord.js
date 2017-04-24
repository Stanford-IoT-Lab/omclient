function O(e){
	if(!e)return;
	var $=this;
	$.Flagger=e['w'];
	$.Reason=e['r'];
	$.Timestamp=e['t'];
}
var _=O.prototype;
_.__type="LDFlaggedRecord";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Flagger!=null)o['w']=$.Flagger;
	if($.Reason!=null)o['r']=$.Reason;
	if($.Timestamp!=null)o['t']=$.Timestamp;
	return o;
}
_.Flagger=null;
_.Reason=null;
_.Timestamp=null;

module.exports=O;
