var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');
var LDIdentity = require('./LDIdentity');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
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
	if(e['a']!=null){
		$.Accounts=[];
		var d = e['a'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetDirectFeedResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
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
	if($.Accounts!=null) {
		o['a']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['a'].push(d[k]);
	}
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.UnmappedIdentities=null;
_.OptOutIdentities=null;
_.Accounts=null;
_.Feed=null;

module.exports=O;
