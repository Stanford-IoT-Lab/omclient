var LDJSONLoggable = require('./LDJSONLoggable');

function LDClusterPartitionableRpcRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
}
LDClusterPartitionableRpcRequest.prototype=new LDJSONLoggable();
LDClusterPartitionableRpcRequest.prototype.constructor = LDClusterPartitionableRpcRequest;
var _=LDClusterPartitionableRpcRequest.prototype;
_.__type="LDClusterPartitionableRpcRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	return o;
}

module.exports=LDClusterPartitionableRpcRequest;
