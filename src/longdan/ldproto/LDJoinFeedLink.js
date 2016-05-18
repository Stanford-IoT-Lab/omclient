function O(e){
	if(!e)return;
	var $=this;
	$.Timestamp=e['t'];
	$.Pin=e['p'];
	$.Url=e['l'];
}
var _=O.prototype;
_.__type="LDJoinFeedLink";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.Pin!=null)o['p']=$.Pin;
	if($.Url!=null)o['l']=$.Url;
	return o;
}
_.Timestamp=null;
_.Pin=null;
_.Url=null;

module.exports=O;
