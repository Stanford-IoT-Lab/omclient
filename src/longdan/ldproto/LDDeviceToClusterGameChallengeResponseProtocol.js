var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDFindGamersResponse = require('./LDFindGamersResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.FindGamers=new LDFindGamersResponse(e['f']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterGameChallengeResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.FindGamers!=null)o['f']=$.FindGamers.encode();
	return o;
}
_.FindGamers=null;

module.exports=O;
