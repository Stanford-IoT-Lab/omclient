var LDSimpleResponse = require('./LDSimpleResponse');
var LDContentIdBase = require('./LDContentIdBase');

function O(e){
	LDContentIdBase.call(this,e);
	if(!e)return;
	var $=this;
	$.Reporter=e['r'];
	$.UserKey=e['k'];
	$.Reason=e['rr'];
	$.Details=e['d'];
}
O.prototype=new LDContentIdBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDReportUserRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDContentIdBase.prototype.encode.call($,o);
	if($.Reporter!=null)o['r']=$.Reporter;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.Reason!=null)o['rr']=$.Reason;
	if($.Details!=null)o['d']=$.Details;
	return o;
}
_.Reporter=null;
_.UserKey=null;
_.Reason=null;
_.Details=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"r":o};o=t;
	t={"#":id,"um":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
