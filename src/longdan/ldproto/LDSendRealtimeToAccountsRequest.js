var LDSimpleResponse = require('./LDSimpleResponse');
var LDClusterPartitionableRpcRequest = require('./LDClusterPartitionableRpcRequest');

function LDSendRealtimeToAccountsRequest(e){
	LDClusterPartitionableRpcRequest.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null){
		$.Accounts=[];
		var d = e['a'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
	$.Type=e['t'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
}
LDSendRealtimeToAccountsRequest.prototype=new LDClusterPartitionableRpcRequest();
LDSendRealtimeToAccountsRequest.prototype.constructor = LDSendRealtimeToAccountsRequest;
var _=LDSendRealtimeToAccountsRequest.prototype;
_.__type="LDSendRealtimeToAccountsRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDClusterPartitionableRpcRequest.prototype.encode.call($,o);
	if($.Accounts!=null) {
		o['a']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['a'].push(d[k]);
	}
	if($.Type!=null)o['t']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	return o;
}
_.Accounts=null;
_.Type=null;
_.Body=null;
LDSendRealtimeToAccountsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"LA":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSendRealtimeToAccountsRequest;
