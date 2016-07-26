var LDListUnverifiedCommunitiesResponse = require('./LDListUnverifiedCommunitiesResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	if(e['ck']!=null)$.ContinuationKey=new Buffer(e['ck'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDListUnverifiedCommunitiesRequest";
_.__rt=LDListUnverifiedCommunitiesResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.ContinuationKey!=null)o['ck']=$.ContinuationKey.toString('base64');
	return o;
}
_.AdminAccount=null;
_.ContinuationKey=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"luc":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
