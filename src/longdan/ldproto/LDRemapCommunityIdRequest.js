var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityIdKey = require('./LDCommunityIdKey');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	if(e['k']!=null)$.CommunityIdKey=new LDCommunityIdKey(e['k']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDRemapCommunityIdRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.CommunityIdKey!=null)o['k']=$.CommunityIdKey.encode();
	return o;
}
_.AdminAccount=null;
_.CommunityIdKey=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"rci":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
