var LDGetAccountsFollowedResponse = require('./LDGetAccountsFollowedResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.NumToGet=e['n'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetAccountsFollowedRequest";
_.__rt=LDGetAccountsFollowedResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.NumToGet!=null)o['n']=$.NumToGet;
	return o;
}
_.Account=null;
_.ContinuationKey=null;
_.NumToGet=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gaf":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
