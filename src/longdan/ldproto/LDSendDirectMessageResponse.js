var LDJSONLoggable = require('./LDJSONLoggable');
var LDIdentity = require('./LDIdentity');
var LDFeed = require('./LDFeed');

function LDSendDirectMessageResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Timestamp=e['t'];
	if(e['m']!=null)$.Metadata=new Buffer(e['m'],'base64');
	if(e['u']!=null){
		$.UnmappedIdentities=[];
		var d = e['u'];
		for(var k=0; k<d.length;++k)$.UnmappedIdentities.push(new LDIdentity(d[k]));
	}
	if(e['o']!=null){
		$.OptOutIdentities=[];
		var d = e['o'];
		for(var k=0; k<d.length;++k)$.OptOutIdentities.push(new LDIdentity(d[k]));
	}
}
LDSendDirectMessageResponse.prototype=new LDJSONLoggable();
LDSendDirectMessageResponse.prototype.constructor = LDSendDirectMessageResponse;
var _=LDSendDirectMessageResponse.prototype;
_.__type="LDSendDirectMessageResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.Metadata!=null)o['m']=$.Metadata.toString('base64');
	if($.UnmappedIdentities!=null) {
		o['u']=[];
		var d=$.UnmappedIdentities;
		for(var k=0;k<d.length;++k) o['u'].push(d[k].encode());
	}
	if($.OptOutIdentities!=null) {
		o['o']=[];
		var d=$.OptOutIdentities;
		for(var k=0;k<d.length;++k) o['o'].push(d[k].encode());
	}
	return o;
}
_.Feed=null;
_.Timestamp=null;
_.Metadata=null;
_.UnmappedIdentities=null;
_.OptOutIdentities=null;

module.exports=LDSendDirectMessageResponse;
