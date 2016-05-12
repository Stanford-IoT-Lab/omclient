var LDJSONLoggable = require('./LDJSONLoggable');

function LDRpcContext(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.DeviceId=new Buffer(e['b'],'base64');
	if(e['r']!=null)$.RootRequestId=new Buffer(e['r'],'base64');
	if(e['i']!=null)$.RequestId=new Buffer(e['i'],'base64');
	$.RequestingAccount=e['a'];
	$.SourceCluster=e['c'];
	$.ForwardedFromNode=e['f'];
	$.WriteSecure=e['s'];
	$.RootIpAddress=e['l'];
	if(e['A']!=null)$.AppId=new Buffer(e['A'],'base64');
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	$.PackageId=e['P'];
}
LDRpcContext.prototype=new LDJSONLoggable();
LDRpcContext.prototype.constructor = LDRpcContext;
var _=LDRpcContext.prototype;
_.__type="LDRpcContext";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.DeviceId!=null)o['b']=$.DeviceId.toString('base64');
	if($.RootRequestId!=null)o['r']=$.RootRequestId.toString('base64');
	if($.RequestId!=null)o['i']=$.RequestId.toString('base64');
	if($.RequestingAccount!=null)o['a']=$.RequestingAccount;
	if($.SourceCluster!=null)o['c']=$.SourceCluster;
	if($.ForwardedFromNode!=null)o['f']=$.ForwardedFromNode;
	if($.WriteSecure!=null)o['s']=$.WriteSecure;
	if($.RootIpAddress!=null)o['l']=$.RootIpAddress;
	if($.AppId!=null)o['A']=$.AppId.toString('base64');
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	if($.PackageId!=null)o['P']=$.PackageId;
	return o;
}
_.DeviceId=null;
_.RootRequestId=null;
_.RequestId=null;
_.RequestingAccount=null;
_.SourceCluster=null;
_.ForwardedFromNode=null;
_.WriteSecure=null;
_.RootIpAddress=null;
_.AppId=null;
_.Scopes=null;
_.PackageId=null;

module.exports=LDRpcContext;
