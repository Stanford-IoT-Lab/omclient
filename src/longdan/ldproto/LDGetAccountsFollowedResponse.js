var LDJSONLoggable = require('./LDJSONLoggable');
var LDUser = require('./LDUser');

function LDGetAccountsFollowedResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.AccountsFollowed=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)$.AccountsFollowed.push(new LDUser(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
LDGetAccountsFollowedResponse.prototype=new LDJSONLoggable();
LDGetAccountsFollowedResponse.prototype.constructor = LDGetAccountsFollowedResponse;
var _=LDGetAccountsFollowedResponse.prototype;
_.__type="LDGetAccountsFollowedResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AccountsFollowed!=null) {
		o['f']=[];
		var d=$.AccountsFollowed;
		for(var k=0;k<d.length;++k) o['f'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.AccountsFollowed=null;
_.ContinuationKey=null;

module.exports=LDGetAccountsFollowedResponse;
