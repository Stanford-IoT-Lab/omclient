var LDSendDirectMessageResponse = require('./LDSendDirectMessageResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDIdentity = require('./LDIdentity');
var LDFeed = require('./LDFeed');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['_f']!=null)$.Feed=new LDFeed(e['_f']);
	if(e['_a']!=null){
		$.Accounts=[];
		var d = e['_a'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
	if(e['s']!=null)$.Sender=new LDIdentity(e['s']);
	if(e['r']!=null){
		$.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)$.Recipients.push(new LDIdentity(d[k]));
	}
	$.FeedKind=e['k'];
	if(e['i']!=null)$.Id=new LDTypedId(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Version=e['v'];
	$.AnyMemberWritable=e['w'];
	$.SmsId=e['d'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSendDirectMessageRequest";
_.__rt=LDSendDirectMessageResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['_f']=$.Feed.encode();
	if($.Accounts!=null) {
		o['_a']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['_a'].push(d[k]);
	}
	if($.Sender!=null)o['s']=$.Sender.encode();
	if($.Recipients!=null) {
		o['r']=[];
		var d=$.Recipients;
		for(var k=0;k<d.length;++k) o['r'].push(d[k].encode());
	}
	if($.FeedKind!=null)o['k']=$.FeedKind;
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.AnyMemberWritable!=null)o['w']=$.AnyMemberWritable;
	if($.SmsId!=null)o['d']=$.SmsId;
	return o;
}
_.Feed=null;
_.Accounts=null;
_.Sender=null;
_.Recipients=null;
_.FeedKind=null;
_.Id=null;
_.Body=null;
_.Version=null;
_.AnyMemberWritable=null;
_.SmsId=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sm":o};o=t;
	t={"#":id,"o":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
