var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDBlockUserRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.UserKey=e['k'];
}
LDBlockUserRequest.prototype=new LDJSONLoggable();
LDBlockUserRequest.prototype.constructor = LDBlockUserRequest;
var _=LDBlockUserRequest.prototype;
_.__type="LDBlockUserRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.UserKey!=null)o['k']=$.UserKey;
	return o;
}
_.UserKey=null;
LDBlockUserRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"b":o};o=t;
	t={"#":id,"um":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDBlockUserRequest;
