var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.OptIn=e['o'];
	$.ServerKicked=e['k'];
	$.Account=e['a'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDOptInForAllGamesChallengesRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.OptIn!=null)o['o']=$.OptIn;
	if($.ServerKicked!=null)o['k']=$.ServerKicked;
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.OptIn=null;
_.ServerKicked=null;
_.Account=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"o":o};o=t;
	t={"#":id,"g":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
