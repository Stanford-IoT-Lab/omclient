var LDGetDirectFeedResponse = require('./LDGetDirectFeedResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['s']!=null)$.Sender=new LDIdentity(e['s']);
	if(e['r']!=null){
		$.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)$.Recipients.push(new LDIdentity(d[k]));
	}
	$.FeedKind=e['k'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetDirectFeedRequest";
_.__rt=LDGetDirectFeedResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Sender!=null)o['s']=$.Sender.encode();
	if($.Recipients!=null) {
		o['r']=[];
		var d=$.Recipients;
		for(var k=0;k<d.length;++k) o['r'].push(d[k].encode());
	}
	if($.FeedKind!=null)o['k']=$.FeedKind;
	return o;
}
_.Sender=null;
_.Recipients=null;
_.FeedKind=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sf":o};o=t;
	t={"#":id,"o":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
