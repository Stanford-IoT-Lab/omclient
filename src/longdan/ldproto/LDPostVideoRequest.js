var LDAddPostResponse = require('./LDAddPostResponse');
var LDPostVideoBaseRequest = require('./LDPostVideoBaseRequest');

function O(e){
	LDPostVideoBaseRequest.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new LDPostVideoBaseRequest();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostVideoRequest";
_.__rt=LDAddPostResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPostVideoBaseRequest.prototype.encode.call($,o);
	return o;
}
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"pv":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
