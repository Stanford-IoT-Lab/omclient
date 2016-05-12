var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDCreateCountryWideFeedRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Country=e['c'];
	$.Days=e['d'];
}
LDCreateCountryWideFeedRequest.prototype=new LDJSONLoggable();
LDCreateCountryWideFeedRequest.prototype.constructor = LDCreateCountryWideFeedRequest;
var _=LDCreateCountryWideFeedRequest.prototype;
_.__type="LDCreateCountryWideFeedRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Country!=null)o['c']=$.Country;
	if($.Days!=null)o['d']=$.Days;
	return o;
}
_.AdminAccount=null;
_.Country=null;
_.Days=null;
LDCreateCountryWideFeedRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"cf":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDCreateCountryWideFeedRequest;
