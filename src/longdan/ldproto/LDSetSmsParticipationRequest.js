var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.OptOut=e['o'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSetSmsParticipationRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.OptOut!=null)o['o']=$.OptOut;
	return o;
}
_.OptOut=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sp":o};o=t;
	t={"#":id,"o":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
