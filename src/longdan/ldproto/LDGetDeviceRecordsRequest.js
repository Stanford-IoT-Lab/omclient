var LDGetDeviceRecordsResponse = require('./LDGetDeviceRecordsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Device=e['i'];
	$.AdminAccount=e['a'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetDeviceRecordsRequest";
_.__rt=LDGetDeviceRecordsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Device!=null)o['i']=$.Device;
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.Device=null;
_.AdminAccount=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"d":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
