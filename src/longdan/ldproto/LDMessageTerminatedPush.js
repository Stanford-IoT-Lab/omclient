var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDMessageTerminatedPush(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDMessageTerminatedPush.prototype=new LDJSONLoggable();
LDMessageTerminatedPush.prototype.constructor = LDMessageTerminatedPush;
var _=LDMessageTerminatedPush.prototype;
_.__type="LDMessageTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;

module.exports=LDMessageTerminatedPush;
