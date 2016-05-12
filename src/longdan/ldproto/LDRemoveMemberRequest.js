var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDAcl = require('./LDAcl');
var LDFeed = require('./LDFeed');

function LDRemoveMemberRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Member=e['m'];
	if(e['A']!=null)$.Acl=new LDAcl(e['A']);
}
LDRemoveMemberRequest.prototype=new LDJSONLoggable();
LDRemoveMemberRequest.prototype.constructor = LDRemoveMemberRequest;
var _=LDRemoveMemberRequest.prototype;
_.__type="LDRemoveMemberRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Member!=null)o['m']=$.Member;
	if($.Acl!=null)o['A']=$.Acl.encode();
	return o;
}
_.Feed=null;
_.Member=null;
_.Acl=null;
LDRemoveMemberRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"r":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDRemoveMemberRequest;
