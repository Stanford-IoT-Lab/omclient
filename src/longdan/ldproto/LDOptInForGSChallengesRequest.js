var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.OptIn=e['o'];
	$.ServerKicked=e['k'];
	if(e['g']!=null)$.Game=new LDItemId(e['g']);
	$.Account=e['a'];
	$.All=e['l'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDOptInForGSChallengesRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.OptIn!=null)o['o']=$.OptIn;
	if($.ServerKicked!=null)o['k']=$.ServerKicked;
	if($.Game!=null)o['g']=$.Game.encode();
	if($.Account!=null)o['a']=$.Account;
	if($.All!=null)o['l']=$.All;
	return o;
}
_.OptIn=null;
_.ServerKicked=null;
_.Game=null;
_.Account=null;
_.All=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ogs":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
