var LDJSONLoggable = require('./LDJSONLoggable');
var LDUser = require('./LDUser');

function LDGetFollowersResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Followers=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)$.Followers.push(new LDUser(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
LDGetFollowersResponse.prototype=new LDJSONLoggable();
LDGetFollowersResponse.prototype.constructor = LDGetFollowersResponse;
var _=LDGetFollowersResponse.prototype;
_.__type="LDGetFollowersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Followers!=null) {
		o['f']=[];
		var d=$.Followers;
		for(var k=0;k<d.length;++k) o['f'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Followers=null;
_.ContinuationKey=null;

module.exports=LDGetFollowersResponse;
